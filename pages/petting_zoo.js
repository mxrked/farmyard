// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLinks";

// Component Imports
import { PageHead } from "@/assets/components/global/Misc/PageHead";

// Style Imports
import "../assets/styles/modules/PettingZoo/PettingZoo.module.css";

export default function PettingZoo() {
  const router = useRouter();

  // Disabling Page Link(s)
  useEffect(() => {
    ManipPageLink("disable", "multiple", "petting-zoo-link");
  }, []);

  return (
    <div id="PAGE" className="overrides_PettingZoo page full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
