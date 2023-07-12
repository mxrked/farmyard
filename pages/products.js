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
import "../assets/styles/modules/Products/Products.module.css";

export default function Products() {
  const router = useRouter();

  // Disabling Page Link(s)
  useEffect(() => {
    // ManipPageLink("disable", "multiple", "products-link");
  }, []);

  return (
    <div id="PAGE" className="overrides_Products page full-second">
      <PageHead />
      <DesktopNav disableLink="/products" />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
