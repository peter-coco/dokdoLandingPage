import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    // <img src="" alt=""/>
    <div id="header">
      <div id="header-logo">
        {/* <img className="header-logo-img" src="./images/logo.svg" alt="" /> */}
      </div>

      <div id="header-menus">
        <div className="header-menu">
          <div>주요사업</div>
          <div className="mainBusiness-arrow arrow"></div>
        </div>

        <div className="header-menu">
          <div>자료실</div>
          <div className="data-arrow arrow"></div>
        </div>
        <div className="header-menu">
          <div>알림마당</div>
          <div className="board-arrow arrow"></div>
        </div>
        <div className="header-menu">
          <div>기관소개</div>
          <div className="introduce-arrow arrow"></div>
        </div>
        <div className="header-menu">
          <div>독도현황</div>
          <div className="dokdoState-arrow arrow"></div>
        </div>
        <div className="header-menu">
          <div>K-독도</div>
          <div className="K-Dokdo-arrow arrow"></div>
        </div>
      </div>
      <div id="header-utils">
        <div id="header-login">
          <i></i>
          <div>로그인</div>
        </div>
        <div id="header-join">
          <i></i>
          <div>회원가입</div>
        </div>
        <div id="header-languages">
          <div id="header-language-now">
            <div>한국어</div>
            <div id="header-language-arrow"></div>
          </div>
          <div id="header-lagnuage-option">
            <div>한국어</div>
            <div>English</div>
            <div>日本語</div>
            <div>中文</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideBar() {
  return;
}

function Main() {
  return;
}

function App() {
  return (
    <>
      <div id="main-wr">
        {/* <SideBar /> */}
        <Header />
        {/* <Main /> */}
      </div>
    </>
  );
}

export default App;
