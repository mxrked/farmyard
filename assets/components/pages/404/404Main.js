/**
 *
 *  This is the 404 main
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import { NOTFOUND_MAIN } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/404/404.module.css";

export const Main_404 = () => {
  return (
    <section className={`${styles.not_found_main}`}>
      <div className={`${styles.not_found_main_inner}`}>
        <div className={`${styles.bg_holder}`}>
          <BackgroundImage src={NOTFOUND_MAIN} className={`${styles.bg}`} />
        </div>

        <div className={`${styles.not_found_main_inner_text}`}>
          <h1>404.</h1>

          <p>
            The page you are looking for does not exist. You can go back to the
            home page using the link below. Sorry for the inconvenience.
          </p>

          <a href="/" className="half-second">
            <span>Go Home</span>
          </a>
        </div>
      </div>
    </section>
  );
};
