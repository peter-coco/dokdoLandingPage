import react, { useCallback, useRef, useState } from "react";
import "./main.css";

import main_menu01 from "./main_img/img_link01.svg";
import main_menu03 from "./main_img/img_link03.svg";
import main_menu02 from "./main_img/img_link02.svg";
import main_menu04 from "./main_img/img_link04.svg";
import main_menu05 from "./main_img/img_link05.svg";
import main_menu06 from "./main_img/img_link06.svg";
import main_menu07 from "./main_img/img_link07.svg";
import main_menu08 from "./main_img/img_link08.svg";
import main_menu09 from "./main_img/img_link09.svg";
import main_menu10 from "./main_img/img_link10.svg";

import ReactPlayer from 'react-player'



function Menu({ img, title }: { img: string; title: string }) {
  return (
    <li className="main-link-menu">
      <img src={img}></img>
      <div>{title}</div>
    </li>
  );
}

export function Main({
  mainLinkToggle,
  setMainLinkToggle,
  headerMenuBtnActivate,
}: {
  mainLinkToggle: boolean;
  setMainLinkToggle: Function;
  headerMenuBtnActivate: boolean;
}) {
  const [videoOnOffToggle, setVideoOnOffToggle] = useState(true);
  const vidRef = useRef();
  const videoOnOffToggleFunc = useCallback(() => {
    // vidRef.current.pause();
    setVideoOnOffToggle((pre) => !pre);

  }, [setVideoOnOffToggle]);

  const mainLinkToggleFunc = useCallback(() => {
    setMainLinkToggle((pre: boolean) => !pre);
  }, [setMainLinkToggle]);

  

  return (
    <div
      id="main-wrap"
      style={{
        height: headerMenuBtnActivate ? "400px" : "937px",
        opacity: headerMenuBtnActivate ? "0" : "1",
        visibility: headerMenuBtnActivate ? "hidden" : "visible",
        transition: headerMenuBtnActivate ? "all 3000ms" : "all 700ms",
      }}
    >
      <div id="main-video">
        {/* <iframe
          id="main-video-src"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/muB4_LNZ2Rk?amp;autoplay=1&;playlist=muB4_LNZ2Rk&loop=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
        ></iframe> */}
        <ReactPlayer id = "main-video-src" playing = {videoOnOffToggle} width = "100%" height = "100%" url='https://www.youtube.com/embed/muB4_LNZ2Rk?' 
         muted loop controls/>
        <div
          className="video-OnOffBtn"
          style={videoOnOffToggle ? { display: "flex" } : { display: "none" }}
          onClick={videoOnOffToggleFunc}
        >
          <div id="video-OffBtnImg"></div>
          <div className="video-OnOffBtnText">STOP</div>
        </div>
        <div
          className="video-OnOffBtn"
          style={videoOnOffToggle ? { display: "none" } : { display: "flex" }}
          onClick={videoOnOffToggleFunc}
        >
          <div id="video-OnBtnImg"></div>
          <div className="video-OnOffBtnText">START</div>
        </div>
      </div>
      <div id={mainLinkToggle ? "main-link-active" : "main-link"}>
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
              className={
                mainLinkToggle
                  ? "main-link-menu-text-subscription-active"
                  : "main-link-menu-text-subscription"
              }
            >
              <div className="main-link-menu-text-title">??????,</div>
              ???????????? ????????? ???????????? ?????????!
            </div>
            <div
              className={
                mainLinkToggle
                  ? "main-link-menu-text-subscription"
                  : "main-link-menu-text-subscription-active"
              }
            >
              <div className="main-link-menu-text-title">??????,</div>
              ??????????????? ???336???! ??????,????????? ????????????.
            </div>
          </div>
          <ul
            id={mainLinkToggle ? "main-link-menus-active" : "main-link-menus"}
          >
            <ul className="main-link-menu-top">
              {[
                ["?????????", main_menu01],
                ["????????????", main_menu02],
                ["????????????", main_menu03],
                ["??????,??????", main_menu04],
                ["????????????", main_menu05],
              ].map(([title, img]) => (
                <Menu key={title} title={title} img={img} />
              ))}
            </ul>
            <ul className="main-link-menu-bottom">
              {[
                ["????????????", main_menu06],
                ["????????????", main_menu07],
                ["??????????????????", main_menu08],
                ["??????????????????", main_menu09],
                ["??????????????????", main_menu10],
              ].map(([title, img]) => (
                <Menu key={title} title={title} img={img} />
              ))}
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
