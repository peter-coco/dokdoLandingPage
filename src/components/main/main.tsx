import react, { useCallback, useEffect, useState } from "react";
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
  const [videoOnOffToggle, setVideoOnOffToggle] = useState(false);

  const videoOnOffToggleFunc = useCallback(() => {
    setVideoOnOffToggle((pre) => !pre);
  }, [setVideoOnOffToggle]);

  const mainLinkToggleFunc = useCallback(() => {
    setMainLinkToggle((pre: boolean) => !pre);
  }, [setMainLinkToggle]);

  return (
    <div
      id="main-wrap"
      style={{ display: headerMenuBtnActivate ? "None" : "block" }}
    >
      <div id="main-video">
        <iframe
          id="main-video-src"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/muB4_LNZ2Rk?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
        ></iframe>
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
              <div className="main-link-menu-text-title">독도,</div>
              한반도의 아침이 시작되는 최동단!
            </div>
            <div
              className={
                mainLinkToggle
                  ? "main-link-menu-text-subscription"
                  : "main-link-menu-text-subscription-active"
              }
            >
              <div className="main-link-menu-text-title">독도,</div>
              천연기념물 제336호! 문화,예술의 섬입니다.
            </div>
          </div>
          <ul
            id={mainLinkToggle ? "main-link-menus-active" : "main-link-menus"}
          >
            <ul className="main-link-menu-top">
              {[
                ["홍보관", main_menu01],
                ["독도영상", main_menu02],
                ["독도사진", main_menu03],
                ["언론,홍보", main_menu04],
                ["계약체결", main_menu05],
              ].map(([title, img]) => (
                <Menu key={title} title={title} img={img} />
              ))}
            </ul>
            <ul className="main-link-menu-bottom">
              {[
                ["고객참여", main_menu06],
                ["국민제안", main_menu07],
                ["독도교육신청", main_menu08],
                ["홍보버스신청", main_menu09],
                ["전시자료신청", main_menu10],
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
