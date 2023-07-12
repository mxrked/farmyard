/**
 *
 *  This is the Desktop Nav
 *
 */

import { useState } from "react";

import { FaRegistered, FaCaretDown } from "react-icons/fa";

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = (props) => {
  const [checkDD, setCheckDD] = useState(false);

  return (
    <nav
      id="desktopNav"
      className={`${styles.desktop_nav} fm-motion full-second`}
    >
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-5 col-md-5 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
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
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-7 col-md-7 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul className={`${styles.main_links}`}>
                  {props.disableLink === "/" ? (
                    <li className={`${styles.deactive}`}>
                      <span className="orientation-change-element half-second">
                        Home
                      </span>
                    </li>
                  ) : (
                    <li className={`${styles.active}`}>
                      <a href="/" className="half-second">
                        <span className="orientation-change-element half-second">
                          Home
                        </span>
                      </a>
                    </li>
                  )}
                  {props.disableLink === "/products" ? (
                    <li className={`${styles.deactive}`}>
                      <div className={`${styles.toggler}`}>
                        <FaCaretDown
                          className={`${styles.icon} orientation-change-element half-second`}
                        />

                        <span className="orientation-change-element half-second">
                          Our Products
                        </span>
                      </div>
                    </li>
                  ) : (
                    <li className={`${styles.active}`}>
                      <div className={`${styles.toggler}`}>
                        <input
                          type="checkbox"
                          checked={checkDD}
                          onChange={(e) => {
                            if (!checkDD) {
                              setCheckDD(true);
                              document.getElementById(
                                "desktopDD"
                              ).style.display = "block";
                            } else {
                              setCheckDD(false);
                              document.getElementById(
                                "desktopDD"
                              ).style.display = "none";
                            }
                          }}
                          onBlur={(e) => {
                            setTimeout(() => {
                              if (checkDD) {
                                setCheckDD(false);
                                document.getElementById(
                                  "desktopDD"
                                ).style.display = "none";
                              }
                            }, 150);
                          }}
                        />

                        <FaCaretDown
                          className={`${styles.icon} orientation-change-element half-second`}
                        />

                        <span className="orientation-change-element half-second">
                          Our Products
                        </span>
                      </div>

                      <ul id="desktopDD">
                        <li className="orientation-change-element half-second">
                          <a href="/products#staples" className="half-second">
                            <span className="half-second">Staple Crops</span>
                          </a>
                        </li>
                        <li className="orientation-change-element half-second">
                          <a href="/products#veggies" className="half-second">
                            <span className="half-second">Vegetables</span>
                          </a>
                        </li>
                        <li className="orientation-change-element half-second">
                          <a href="/products#dairies" className="half-second">
                            <span className="half-second">Dairies</span>
                          </a>
                        </li>
                        <li className="orientation-change-element half-second">
                          <a href="/products" className="half-second">
                            <span className="half-second">View All</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  )}
                  {props.disableLink === "/petting_zoo" ? (
                    <li className={`${styles.deactive}`}>
                      <span className="orientation-change-element half-second">
                        Petting Zoo
                      </span>
                    </li>
                  ) : (
                    <li className={`${styles.active}`}>
                      <a href="/petting_zoo" className="half-second">
                        <span className="orientation-change-element half-second">
                          Petting Zoo
                        </span>
                      </a>
                    </li>
                  )}
                  {props.disableLink === "/info" ? (
                    <li className={`${styles.deactive}`}>
                      <span className="orientation-change-element half-second">
                        About Us
                      </span>
                    </li>
                  ) : (
                    <li className={`${styles.active}`}>
                      <a href="/info" className="half-second">
                        <span className="orientation-change-element half-second">
                          About Us
                        </span>
                      </a>
                    </li>
                  )}
                  {props.disableLink === "/contact" ? (
                    <li className={`${styles.deactive}`}>
                      <span className="orientation-change-element half-second">
                        Contact Us
                      </span>
                    </li>
                  ) : (
                    <li className={`${styles.active}`}>
                      <a href="/contact" className="half-second">
                        <span className="orientation-change-element half-second">
                          Contact Us
                        </span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
