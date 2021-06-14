import { useState, useEffect } from "react";
import "./container_logo.css";

import banner01 from "./banner/img_logo01.gif";
import banner02 from "./banner/img_logo02.gif";
import banner03 from "./banner/img_logo03.gif";
import banner04 from "./banner/img_logo04.gif";
import banner05 from "./banner/img_logo05.gif";
import banner06 from "./banner/img_logo06.gif";
import banner07 from "./banner/img_logo07.gif";
import banner08 from "./banner/img_logo08.gif";
import banner09 from "./banner/img_logo09.gif";
import banner10 from "./banner/img_logo10.jpg";
import banner11 from "./banner/img_logo11.jpg";

export function ContainerLogo() {
  const [logoBannerIdx, setLogoBannerIdx] = useState(0);
  const [logoBannerOnOffBtn, setLogoBannerOnOffBtn] = useState(true);

  useEffect(() => {
    if (logoBannerOnOffBtn) {
      const logoBannerTimer = setInterval(() => {
        setLogoBannerIdx((pre) => (pre + 1 === 5 ? 0 : pre + 1));
      }, 2000);

      return () => clearInterval(logoBannerTimer);
    }
  }, [logoBannerOnOffBtn]);

  return (
    <div id="container-logo">
      <div id="container-logo-wrap">
        <div id="container-logo-btn">
          <div
            id="container-logo-prev"
            onClick={() => {
              setLogoBannerIdx((pre) => (pre - 1 === -1 ? 4 : pre - 1));
            }}
          ></div>
          <div
            id="container-logo-play"
            onClick={() => {
              setLogoBannerOnOffBtn((pre) => !pre);
            }}
            style={{ display: logoBannerOnOffBtn ? "none" : "block" }}
          ></div>
          <div
            id="container-logo-pause"
            onClick={() => {
              setLogoBannerOnOffBtn((pre) => !pre);
            }}
            style={{ display: logoBannerOnOffBtn ? "block" : "none" }}
          ></div>
          <div
            id="container-logo-next"
            onClick={() => {
              setLogoBannerIdx((pre) => (pre + 1 === 5 ? 0 : pre + 1));
            }}
          ></div>
        </div>
        <div id="container-logo-list">
          <ul
            id="container-logo-banner"
            style={{
              transition: "1000ms",
              transform: `translate(${logoBannerIdx * -195}px)`,
            }}
          >
            <li className="banner">
              <img src={banner01} alt="" />
            </li>
            <li className="banner">
              <img src={banner02} alt="" />
            </li>
            <li className="banner">
              <img src={banner03} alt="" />
            </li>
            <li className="banner">
              <img src={banner04} alt="" />
            </li>
            <li className="banner">
              <img src={banner05} alt="" />
            </li>
            <li className="banner">
              <img src={banner06} alt="" />
            </li>
            <li className="banner">
              <img src={banner07} alt="" />
            </li>
            <li className="banner">
              <img src={banner08} alt="" />
            </li>
            {/* <li className="banner">
                  <img src={banner09} alt="" />
                </li> */}
            <li className="banner">
              <img src={banner10} alt="" />
            </li>
            <li className="banner">
              <img src={banner11} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
