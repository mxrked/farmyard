// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/Misc/PageHead";
import { Logo_404 } from "@/assets/components/pages/404/404Logo";
import { Main_404 } from "@/assets/components/pages/404/404Main";

// Style Imports
import "../assets/styles/modules/404/404.module.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <div id="PAGE" className="overrides_404 page full-second">
      <PageHead />

      <Logo_404 />

      <main id="PAGE_CNT">
        <Main_404 />
      </main>
    </div>
  );
}
