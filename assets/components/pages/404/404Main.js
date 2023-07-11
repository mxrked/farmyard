/**
 *
 *  This is the 404 main
 *
 */
import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";

import { NOTFOUND_MAIN } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/404/404.module.css";

export const Main_404 = () => {
  useEffect(() => {
    document.getElementById("notFoundBG").ariaLabel =
      "Vector Art of Sunny Meadow with Red Barn.";
  }, []);

  return (
    <section className={`${styles.not_found_main}`}>
      <div className={`${styles.not_found_main_inner}`}>
        <div
          className={`${styles.bg_holder} orientation-change-element half-second`}
        >
          <BackgroundImage
            src={NOTFOUND_MAIN}
            width="100%"
            height="100%"
            className={`${styles.bg}`}
            id="notFoundBG"
          />
        </div>

        <div className={`${styles.not_found_main_inner_text}`}>
          <h1 className="orientation-change-element half-second">404.</h1>

          <p className="orientation-change-element half-second">
            The page you are looking for does not exist. You can go back to the
            home page using the link below. Sorry for the inconvenience.
          </p>

          <a href="/" className="orientation-change-element half-second">
            <span>Go Home</span>
          </a>
        </div>
      </div>
    </section>
  );
};
