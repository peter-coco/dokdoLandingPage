import react, { useCallback, useEffect, useState } from "react";
import "./main.css";

import main_menu01 from "../../images/main_img/img_link01.svg";
import main_menu03 from "../../images/main_img/img_link03.svg";
import main_menu02 from "../../images/main_img/img_link02.svg";
import main_menu04 from "../../images/main_img/img_link04.svg";
import main_menu05 from "../../images/main_img/img_link05.svg";
import main_menu06 from "../../images/main_img/img_link06.svg";
import main_menu07 from "../../images/main_img/img_link07.svg";
import main_menu08 from "../../images/main_img/img_link08.svg";
import main_menu09 from "../../images/main_img/img_link09.svg";
import main_menu10 from "../../images/main_img/img_link10.svg";

export function Main({
  mainLinkToggle,
  setMainLinkToggle,
}: {
  mainLinkToggle: boolean;
  setMainLinkToggle: Function;
}) {
  const [videoOnOffToggle, setVideoOnOffToggle] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    console.log(window.innerWidth);
  }, [window.innerWidth]);

  window.addEventListener("resize", () => {
    // console.log(window.innerWidth, windowWidth);
    setWindowWidth(window.innerWidth);
  });

  const videoOnOffToggleFunc = useCallback(() => {
    setVideoOnOffToggle((pre) => !pre);
  }, [setVideoOnOffToggle]);

  const mainLinkToggleFunc = useCallback(() => {
    setMainLinkToggle((pre: boolean) => !pre);
  }, [setMainLinkToggle]);

  return (
    <div id="main-wrap">
      <div id="main-video">
        <video
          id="main-video-src"
          width="auto"
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source
            src="/video/videoSample.mp4"
            // src={video1}
            type="video/mp4"
            id="video-src"
          />
        </video>
        <div
          className="video-OnOffBtn"
          style={videoOnOffToggle ? { display: "none" } : { display: "flex" }}
          onClick={videoOnOffToggleFunc}
        >
          <div id="video-OffBtnImg"></div>
          <div className="video-OnOffBtnText">STOP</div>
        </div>
        <div
          className="video-OnOffBtn"
          style={videoOnOffToggle ? { display: "flex" } : { display: "none" }}
          onClick={videoOnOffToggleFunc}
        >
          <div id="video-OnBtnImg"></div>
          <div className="video-OnOffBtnText">START</div>
        </div>
      </div>
      <div
        id="main-link"
        style={
          mainLinkToggle
            ? windowWidth <= 1200
              ? { width: "90%" }
              : { width: "80%" }
            : windowWidth <= 1200
            ? { width: `${windowWidth - 79}px` }
            : { width: "35%" }
        }
      >
        <div id="main-link-openCloseBtn" onClick={mainLinkToggleFunc}>
          <div
            id="openCloseTop"
            style={{
              transform: mainLinkToggle ? "rotate(35deg)" : "rotate(-35deg)",
            }}
          ></div>
          <div
            id="openCloseBottom"
            style={{
              transform: mainLinkToggle ? "rotate(-35deg)" : "rotate(35deg)",
            }}
          ></div>
          <div
            id="openCloseText"
            style={{ display: mainLinkToggle ? "none" : "block" }}
          >
            OPEN
          </div>
          <div
            id="openCloseText"
            style={{ display: mainLinkToggle ? "block" : "none" }}
          >
            CLOSE
          </div>
        </div>
        <div id="main-link-menu-wrap">
          <div id="main-link-menu-text">
            <div
              className="main-link-menu-text-subscription"
              style={
                mainLinkToggle
                  ? windowWidth <= 1200
                    ? {
                        height: "0px",
                        opacity: "0",
                        transition: "all 1ms",
                      }
                    : {
                        height: "0px",
                        opacity: "0",
                        transition: "all 1ms",
                      }
                  : windowWidth <= 1200
                  ? {
                      height: "0px",
                      opacity: "0",
                      transition: "all 1ms",
                    }
                  : {
                      height: "100%",
                      opacity: "1",
                      transition: "all 4s",
                    }
              }
            >
              <div className="main-link-menu-text-title">독도,</div>
              한반도의 아침이 시작되는 최동단!
            </div>
            <div
              className="main-link-menu-text-subscription"
              style={
                mainLinkToggle
                  ? {
                      opacity: "1",
                      transition: "all 1500ms",
                      marginRight: "30px",
                    }
                  : windowWidth <= 1200
                  ? { opacity: "1", transition: "all 4s" }
                  : { opacity: "0", transition: "all 1ms" }
              }
            >
              <div className="main-link-menu-text-title">독도,</div>
              천연기념물 제336호! 문화,예술의 섬입니다.
            </div>
          </div>
          <ul
            id="main-link-menus"
            style={
              mainLinkToggle
                ? windowWidth <= 1200
                  ? {
                      width: "700px",
                      visibility: "visible",
                      opacity: "1",
                      transition: "all 1000ms",
                    }
                  : {
                      width: "700px",
                      visibility: "visible",
                      opacity: "1",
                      transition: "all 1000ms",
                    }
                : windowWidth <= 1200
                ? {
                    width: "700px",
                    visibility: "visible",
                    opacity: "1",
                    transition: "all 1000ms",
                  }
                : {
                    width: "0px",
                    visibility: "hidden",
                    opacity: "0",
                    transition: "all 500ms",
                  }
            }
          >
            <ul className="main-link-menu-top">
              <li className="main-link-menu">
                <img src={main_menu01}></img>
                <div>홍보관</div>
              </li>
              <li className="main-link-menu">
                <img src={main_menu02}></img>
                <div>독도영상</div>
              </li>
              <li className="main-link-menu">
                <img src={main_menu03}></img>
                <div>독도사진</div>
              </li>
              <li className="main-link-menu">
                <img src={main_menu04}></img>
                <div>언론,홍보</div>
              </li>
              <li className="main-link-menu">
                <img src={main_menu05}></img>
                <div>계약체결</div>
              </li>
            </ul>
            <ul className="main-link-menu-bottom">
              <li className="main-link-menu">
                <img src={main_menu06}></img>
                <div>고객참여</div>
              </li>
              <li className="main-link-menu">
                <img src={main_menu07}></img>
                <div>국민제안</div>
              </li>
              <li className="main-link-menu">
                <img src={main_menu08}></img>
                <div>독도교육신청</div>
              </li>
              <li className="main-link-menu">
                <img src={main_menu09}></img>
                <div>홍보버스신청</div>
              </li>
              <li className="main-link-menu">
                <img src={main_menu10}></img>
                <div>전시자료신청</div>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div id="main-picture-dokdo">
        <div id="main-picture-cloud"></div>
      </div>
    </div>
  );
}
