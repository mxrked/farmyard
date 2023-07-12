/**
 *
 *  This is the Mobile Nav
 *
 */

import { FaRegistered, FaCaretDown } from "react-icons/fa";

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = (props) => {
  return (
    <nav
      id="mobileNav"
      className={`${styles.mobile_nav} fm-motion full-second`}
    >
      <div className={`${styles.mobile_nav_inner}`}>
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-5 col-md-5 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                {props.disableLink === "/" ? (
                  <div className={`${styles.logo} ${styles.deactive}`}>
                    <img
                      data-src={LOGO}
                      className="lazyload orientation-change-element half-second"
                      alt="Farmyard Logo."
                    />

                    <div>
                      <span
                        className={`${styles.top_text} orientation-change-element half-second`}
                      >
                        FARM<span>YARD</span>{" "}
                        <FaRegistered className={`${styles.icon}`} />
                      </span>
                      <span
                        className={`${styles.bottom_text} orientation-change-element half-second`}
                      >
                        crops, veggies, dairy farm.
                      </span>
                    </div>
                  </div>
                ) : (
                  <a href="/" className={`${styles.logo} ${styles.active}`}>
                    <img
                      data-src={LOGO}
                      className="lazyload orientation-change-element half-second"
                      alt="Farmyard Logo."
                    />

                    <div>
                      <span
                        className={`${styles.top_text} orientation-change-element half-second`}
                      >
                        FARM<span>YARD</span>{" "}
                        <FaRegistered className={`${styles.icon}`} />
                      </span>
                      <span
                        className={`${styles.bottom_text} orientation-change-element half-second`}
                      >
                        crops, veggies, dairy farm.
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-7 col-md-7 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <button id="mobileNavToggler">
                  <span className="half-second" />
                  <span className="half-second" />
                  <span className="half-second" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
