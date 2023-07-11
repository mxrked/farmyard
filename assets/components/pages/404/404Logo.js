/**
 *
 *  This is the 404 logo
 *
 */

import { FaRegistered } from "react-icons/fa";

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../styles/modules/404/404.module.css";

export const Logo_404 = () => {
  return (
    <section className={`${styles.not_found_logo}`}>
      <a href="/" className="half-second">
        <img data-src={LOGO} className="lazyload" alt="Farmyard Logo." />

        <div>
          <span className={`${styles.top_text}`}>
            FARM<span>YARD</span>
            <FaRegistered className={`${styles.icon}`} />
          </span>
          <span className={`${styles.bottom_text}`}>
            crops, veggies, dairy farm.
          </span>
        </div>
      </a>
    </section>
  );
};
