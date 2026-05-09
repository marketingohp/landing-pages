"use client";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface FloorPlanTab {
  id: string;
  label: string;
  images: string[];
}

const floorPlanTabs: FloorPlanTab[] = [
  {
    id: "studio",
    label: "Studio",
    images: ["/images/radission-residences/Studio-Type-1.jpg"],
  },
  {
    id: "1br",
    label: "1 BR",
    images: ["/images/radission-residences/1-BR-Type-1.jpg"],
  },
  {
    id: "2br",
    label: "2 BR",
    images: ["/images/radission-residences/2-BR-Type-1.jpg"],
  },
  {
    id: "3br",
    label: "3 BR",
    images: ["/images/radission-residences/3-BR-Type-1.jpg"],
  },
  {
    id: "townhouse",
    label: "Townhouse",
    images: ["/images/radission-residences/Townhouse-Type-1.jpg"],
  },
];

interface ZoomState {
  scale: number;
  x: number;
  y: number;
}

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState("studio");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [zoomState, setZoomState] = useState<ZoomState>({
    scale: 1,
    x: 0,
    y: 0,
  });
  const [isZoomed, setIsZoomed] = useState(false);
  const lightboxSwiperRef = useRef<SwiperType | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeTabData = floorPlanTabs.find((tab) => tab.id === activeTab);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setAnimationKey((prev) => prev + 1);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setCurrentSlideIndex(index);
    setLightboxOpen(true);
    resetZoom();
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    resetZoom();
  };

  const resetZoom = () => {
    setZoomState({ scale: 1, x: 0, y: 0 });
    setIsZoomed(false);
  };

  const handleZoomIn = () => {
    setZoomState((prev) => {
      const newScale = Math.min(prev.scale + 0.5, 3);
      setIsZoomed(newScale > 1);
      return { ...prev, scale: newScale };
    });
  };

  const handleZoomOut = () => {
    setZoomState((prev) => {
      const newScale = Math.max(prev.scale - 0.5, 1);
      setIsZoomed(newScale > 1);
      if (newScale === 1) {
        return { scale: 1, x: 0, y: 0 };
      }
      return { ...prev, scale: newScale };
    });
  };

  const handleDoubleClick = () => {
    if (isZoomed) {
      resetZoom();
    } else {
      setZoomState({ scale: 2, x: 0, y: 0 });
      setIsZoomed(true);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!isZoomed) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoomState((prev) => {
      const newScale = Math.max(1, Math.min(prev.scale + delta, 3));
      if (newScale === 1) {
        setIsZoomed(false);
        return { scale: 1, x: 0, y: 0 };
      }
      return { ...prev, scale: newScale };
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed) return;
    e.preventDefault();
    const startX = e.clientX - zoomState.x;
    const startY = e.clientY - zoomState.y;

    const handleMouseMove = (e: MouseEvent) => {
      setZoomState((prev) => ({
        ...prev,
        x: e.clientX - startX,
        y: e.clientY - startY,
      }));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Touch support for mobile
  const touchStartRef = useRef<{
    x: number;
    y: number;
    distance: number;
  } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isZoomed) {
      // Single touch - pan
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX - zoomState.x,
        y: touch.clientY - zoomState.y,
        distance: 0,
      };
    } else if (e.touches.length === 2) {
      // Two touches - pinch zoom
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY,
      );
      touchStartRef.current = {
        x: 0,
        y: 0,
        distance,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    e.preventDefault();

    if (e.touches.length === 1 && isZoomed) {
      // Single touch - pan
      const touch = e.touches[0];
      setZoomState((prev) => ({
        ...prev,
        x: touch.clientX - touchStartRef.current!.x,
        y: touch.clientY - touchStartRef.current!.y,
      }));
    } else if (e.touches.length === 2) {
      // Two touches - pinch zoom
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY,
      );
      const scaleChange = distance / touchStartRef.current.distance;
      setZoomState((prev) => {
        const newScale = Math.max(1, Math.min(prev.scale * scaleChange, 3));
        setIsZoomed(newScale > 1);
        if (newScale === 1) {
          return { scale: 1, x: 0, y: 0 };
        }
        return { ...prev, scale: newScale };
      });
      touchStartRef.current.distance = distance;
    }
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
  };

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  // Handle keyboard navigation (ESC to close, Arrow keys to navigate, +/- to zoom)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen || !activeTabData) return;

      if (e.key === "Escape") {
        if (isZoomed) {
          resetZoom();
        } else {
          closeLightbox();
        }
      } else if (
        e.key === "ArrowLeft" &&
        lightboxSwiperRef.current &&
        !isZoomed
      ) {
        lightboxSwiperRef.current.slidePrev();
        resetZoom();
      } else if (
        e.key === "ArrowRight" &&
        lightboxSwiperRef.current &&
        !isZoomed
      ) {
        lightboxSwiperRef.current.slideNext();
        resetZoom();
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === "0") {
        e.preventDefault();
        resetZoom();
      }
    };

    if (lightboxOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, activeTabData, isZoomed]);

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="text-center mb-12 ">
        <h2
          className="text-2xl md:text-4xl lg:text-4xl text-[#1a3a5c] dark:text-white mb-8"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Floor Plans
        </h2>
        <p className="text-base sm:text-lg text-[#4a6fa5] dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
          Explore the floor plans of our residential units.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {floorPlanTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-[#99bed4] text-white border-[#99bed4]"
                  : "bg-[#ffffff] text-gray-700 border-[#e5ddd0] hover:bg-[#e5ddd0]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Floor Plan Images with Bounce Animation */}
        <div key={animationKey} className="animate-bounce-in">
          {activeTabData && activeTabData.images.length > 1 ? (
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="floor-plan-swiper"
            >
              {activeTabData.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="cursor-pointer elementor-lightbox-item"
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openLightbox(index);
                      }
                    }}
                    aria-label={`Open ${activeTabData.label} Floor Plan ${index + 1} in lightbox`}
                  >
                    <img
                      src={image}
                      alt={`${activeTabData.label} Floor Plan ${index + 1}`}
                      className="w-full h-auto max-h-[600px] object-contain mx-auto rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : activeTabData ? (
            <div
              className="cursor-pointer elementor-lightbox-item"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(0);
                }
              }}
              aria-label={`Open ${activeTabData.label} Floor Plan in lightbox`}
            >
              <img
                src={activeTabData.images[0]}
                alt={`${activeTabData.label} Floor Plan`}
                className="w-full h-auto max-h-[600px] object-contain mx-auto rounded-lg"
              />
            </div>
          ) : null}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && activeTabData && (
          <div
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center animate-fade-in elementor-lightbox"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Top Bar with Controls */}
            <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 pointer-events-none">
              {/* Slide Counter */}
              <div className="text-white text-sm font-medium pointer-events-auto">
                {currentSlideIndex + 1} / {activeTabData.images.length}
              </div>

              {/* Control Buttons Group */}
              <div className="flex items-center gap-2 pointer-events-auto">
                {/* Zoom In */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomIn();
                  }}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Zoom in"
                  title="Zoom in (+)"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </button>

                {/* Zoom Out */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomOut();
                  }}
                  disabled={!isZoomed}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Zoom out"
                  title="Zoom out (-)"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                    />
                  </svg>
                </button>

                {/* Reset Zoom (only show when zoomed) */}
                {isZoomed && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      resetZoom();
                    }}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                    aria-label="Reset zoom"
                    title="Reset zoom (0)"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                )}

                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Close lightbox"
                  title="Close (ESC)"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="w-full max-w-5xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <Swiper
                  onSwiper={(swiper) => {
                    lightboxSwiperRef.current = swiper;
                    swiper.slideTo(lightboxIndex, 0);
                  }}
                  onSlideChange={(swiper) => {
                    setCurrentSlideIndex(swiper.activeIndex);
                    resetZoom();
                  }}
                  initialSlide={lightboxIndex}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation={true}
                  keyboard={{ enabled: true }}
                  modules={[Pagination, Navigation, Keyboard]}
                  className="lightbox-swiper elementor-lightbox-content"
                  allowTouchMove={!isZoomed}
                >
                  {activeTabData.images.map((image, index) => (
                    <SwiperSlide
                      key={index}
                      className="elementor-lightbox-item"
                    >
                      <div
                        ref={containerRef}
                        className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-white"
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{
                          cursor: isZoomed ? "grab" : "default",
                          touchAction: "none",
                        }}
                      >
                        <img
                          ref={imageRef}
                          src={image}
                          alt={`${activeTabData.label} Floor Plan ${index + 1}`}
                          className="max-w-full max-h-full object-contain select-none"
                          style={{
                            transform: `scale(${zoomState.scale}) translate(${zoomState.x / zoomState.scale}px, ${zoomState.y / zoomState.scale}px)`,
                            transformOrigin: "center center",
                            transition: isZoomed
                              ? "none"
                              : "transform 0.3s ease",
                          }}
                          onDoubleClick={handleDoubleClick}
                          draggable={false}
                        />
                        {!isZoomed && (
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/70 text-white px-4 py-2 rounded-lg text-sm pointer-events-none backdrop-blur-sm">
                            Double-click to zoom in
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        :global(.animate-bounce-in) {
          animation: bounceIn 0.6s ease-out;
        }

        :global(.animate-fade-in) {
          animation: fadeIn 0.3s ease-out;
        }

        :global(.floor-plan-swiper .swiper-button-next),
        :global(.floor-plan-swiper .swiper-button-prev) {
          color: #99bed4;
        }

        :global(.floor-plan-swiper .swiper-pagination-bullet-active) {
          background: #99bed4;
        }

        :global(.lightbox-swiper .swiper-button-next),
        :global(.lightbox-swiper .swiper-button-prev) {
          color: white;
        }

        :global(.lightbox-swiper .swiper-pagination-bullet) {
          background: white;
        }

        :global(.lightbox-swiper .swiper-pagination-bullet-active) {
          background: #99bed4;
        }

        :global(.elementor-lightbox-item) {
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        :global(.elementor-lightbox-item:hover) {
          transform: scale(1.02);
        }

        :global(.elementor-lightbox-item:focus) {
          outline: 2px solid #99bed4;
          outline-offset: 4px;
        }

        :global(.elementor-lightbox) {
          backdrop-filter: blur(4px);
        }

        :global(.lightbox-swiper .elementor-lightbox-item) {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :global(.lightbox-swiper .elementor-lightbox-item img) {
          user-select: none;
          -webkit-user-drag: none;
        }
      `}</style>
    </section>
  );
}
