"use client";

import BottomFooter from "./common/BottomFooter";
import OhanaHeader from "./OpenHouse/OhanaHeader";
import FloatingWhatsAppIcon from "./OpenHouse/FloatingWhatsAppIcon";

export default function OpenHousePage() {
  return (
    <>
      <OhanaHeader />
      <FloatingWhatsAppIcon />
      <BottomFooter developerName="Ohana" />
    </>
  );
}
