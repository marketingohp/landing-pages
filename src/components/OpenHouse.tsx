"use client";

import BottomFooter from "./common/BottomFooter";
import FloatingWhatsAppIcon from "./OpenHouse/FloatingWhatsAppIcon";
import OhanaHeader from "./OpenHouse/OhanaHeader";

export default function OpenHousePage() {
  return (
    <>
      <OhanaHeader />
      <FloatingWhatsAppIcon />
      <BottomFooter developerName="Ohana" />
    </>
  );
}
