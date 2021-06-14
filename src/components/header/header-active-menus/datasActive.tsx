// import "./header.css";
import { useState } from "react";

export function DataActive() {
  const [pictureDokDoToggle, setPictureDokDoToggle] = useState(false);
  const [videoDokDoToggle, setVideoDokDoToggle] = useState(false);
  return (
    <li className="header-menu-active datas">
      <div>자료실</div>
      <ul className="header-sub-menu-active">
        <li
          className="sub-menu-active"
          onClick={() => {
            setPictureDokDoToggle((pre) => !pre);
          }}
        >
          <div className="sub-menu-title-active">
            <div className="sub-menu-title-text-active">독도사진</div>
            <div className="sub-menu-addBtn-active">
              <div
                className="sub-menu-vetical-active"
                style={{ opacity: pictureDokDoToggle ? "0" : "1" }}
              ></div>
              <div className="sub-menu-horizontal-active"></div>
            </div>
          </div>
          <ul
            className="sub-menu-sub-menu-active"
            style={{
              height: pictureDokDoToggle ? "100%" : "0px",
              visibility: pictureDokDoToggle ? "visible" : "hidden",
              opacity: pictureDokDoToggle ? "1" : "0",
              transition: "all 300ms",
            }}
          >
            <li>독도</li>
            <li>식물</li>
            <li>조류</li>
            <li>생물</li>
          </ul>
        </li>
        <li
          className="sub-menu-active"
          onClick={() => {
            setVideoDokDoToggle((pre) => !pre);
          }}
        >
          <div className="sub-menu-title-active">
            <div className="sub-menu-title-text-active">독도영상</div>
            <div className="sub-menu-addBtn-active">
              <div
                className="sub-menu-vetical-active"
                style={{ opacity: videoDokDoToggle ? "0" : "1" }}
              ></div>
              <div className="sub-menu-horizontal-active"></div>
            </div>
          </div>
          <ul
            className="sub-menu-sub-menu-active"
            style={{
              height: videoDokDoToggle ? "100%" : "0px",
              visibility: videoDokDoToggle ? "visible" : "hidden",
              opacity: videoDokDoToggle ? "1" : "0",
              transition: "all 300ms",
            }}
          >
            <li>홍보영상</li>
            <li>언론영상</li>
          </ul>
        </li>
        <li className="sub-menu-active">
          <div className="sub-menu-title-active">연구자료</div>
        </li>
        <li className="sub-menu-active">
          <div className="sub-menu-title-active">매거진</div>
        </li>
        <li className="sub-menu-active">
          <div className="sub-menu-title-active">매거진신청</div>
        </li>
        <li className="sub-menu-active">
          <div className="sub-menu-title-active">홍보관</div>
        </li>
        <li className="sub-menu-active">
          <div className="sub-menu-title-active">LIVE 독도영상</div>
        </li>
      </ul>
    </li>
  );
}
