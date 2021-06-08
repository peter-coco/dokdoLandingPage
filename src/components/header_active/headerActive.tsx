import { MainBusinessActive } from "./header-active-menus/mainBusinessActive";
import { DataActive } from "./header-active-menus/datasActive";
import { BoardActive } from "./header-active-menus/boardActive";
import { IntroduceActive } from "./header-active-menus/introduceActive";
import { DokdoStateActive } from "./header-active-menus/dokdoStateActive";
import { KdokdoActive } from "./header-active-menus/KdokdoActive";

import { useState, useCallback } from "react";
import "./headerActive.css";
// import "../header/header.css";

export function HeaderActive({
  mainLinkToggle,
  headerMenuBtnActivate,
  setHeaderMenuBtnActivate,
}: {
  mainLinkToggle: boolean;
  headerMenuBtnActivate: boolean;
  setHeaderMenuBtnActivate: Function;
}) {
  const [languageOption, setLanguageOption] = useState(false);

  const languageOptionOnOFFFunc = useCallback(() => {
    setLanguageOption((pre) => !pre);
  }, [setLanguageOption]);

  const headerMenuBtnActivateFunc = useCallback(() => {
    setHeaderMenuBtnActivate((pre: boolean) => !pre);
  }, [setHeaderMenuBtnActivate]);

  return (
    <div
      id="header-menus-active-wrap"
      style={{
        height: headerMenuBtnActivate ? "100%" : "0px",
        opacity: headerMenuBtnActivate ? "1" : "0",
        visibility: headerMenuBtnActivate ? "visible" : "hidden",
        transition: "all 700ms",
      }}
    >
      <div id="header-menu-wrap">
        <div
          id={headerMenuBtnActivate ? "header-logo-active" : "header-logo"}
        ></div>
        <button
          id={
            headerMenuBtnActivate ? "header-menuBtn-active" : "header-menuBtn"
          }
          onClick={headerMenuBtnActivateFunc}
        >
          <i></i>
          <i></i>
          <i></i>
        </button>

        <div id="header-utils">
          <div
            id={headerMenuBtnActivate ? "header-login-active" : "header-login"}
          >
            <div
              id={headerMenuBtnActivate ? "join-img-active" : "join-img"}
            ></div>
            <div
              className={
                headerMenuBtnActivate ? "header-text-active" : "header-text"
              }
            >
              로그인
            </div>
          </div>
          <div
            id={headerMenuBtnActivate ? "header-join-active" : "header-join"}
          >
            <div
              id={headerMenuBtnActivate ? "login-img-active" : "login-img"}
            ></div>
            <div
              className={
                headerMenuBtnActivate ? "header-text-active" : "header-text"
              }
            >
              회원가입
            </div>
          </div>
          <div id="header-languages">
            <div
              id={
                headerMenuBtnActivate
                  ? "header-language-now-active"
                  : "header-language-now"
              }
              onClick={languageOptionOnOFFFunc}
            >
              <div
                className={
                  headerMenuBtnActivate ? "header-text-active" : "header-text"
                }
              >
                한국어
              </div>
              <div
                id={
                  headerMenuBtnActivate
                    ? "header-language-arrow-active"
                    : "header-language-arrow"
                }
              ></div>
            </div>
            <div
              id={
                headerMenuBtnActivate
                  ? "header-language-option-active"
                  : "header-language-option"
              }
              style={{
                height: languageOption ? "150px" : "0px",
                visibility: languageOption ? "visible" : "hidden",
                opacity: languageOption ? "1" : "0",
                transition: "all 300ms",
              }}
            >
              <div className="languages">한국어</div>
              <div className="languages">English</div>
              <div className="languages">日本語</div>
              <div className="languages">中文</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="header-menus-active"
        style={{
          color: mainLinkToggle ? "white" : "#333",
        }}
      >
        <MainBusinessActive />
        <DataActive />
        <BoardActive />
        <IntroduceActive />
        <DokdoStateActive />
        <KdokdoActive />
      </div>
    </div>
  );
}
