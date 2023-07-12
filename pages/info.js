// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLinks";

// Component Imports
import { PageHead } from "@/assets/components/global/Misc/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";

// Style Imports
import "../assets/styles/modules/Info/Info.module.css";

export default function Info() {
  const router = useRouter();

  // Disabling Page Link(s)
  useEffect(() => {
    // ManipPageLink("disable", "multiple", "info-link");
  }, []);

  return (
    <div id="PAGE" className="overrides_Info page full-second">
      <PageHead />
      <DesktopNav disableLink="/info" />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
