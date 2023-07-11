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
        <img
          data-src={LOGO}
          className="orientation-change-element half-second lazyload"
          alt="Farmyard Logo."
        />

        <div>
          <span
            className={`${styles.top_text} orientation-change-element half-second`}
          >
            FARM<span>YARD</span>
            <FaRegistered
              className={`${styles.icon} orientation-change-element half-second`}
            />
          </span>
          <span
            className={`${styles.bottom_text} orientation-change-element half-second`}
          >
            crops, veggies, dairy farm.
          </span>
        </div>
      </a>
    </section>
  );
};
