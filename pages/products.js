// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/Misc/PageHead";

// Style Imports
import "../assets/styles/modules/Products/Products.module.css";

export default function Products() {
  const router = useRouter();

  return (
    <div id="PAGE" className="overrides_Products page full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
