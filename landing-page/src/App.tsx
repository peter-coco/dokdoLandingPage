import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
// import video from "./images/videoSample.mp4";
import { stringify } from "node:querystring";

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
          <div id="login-img"></div>
          <div>로그인</div>
        </div>
        <div id="header-join">
          <div id="join-img"></div>
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
  return (
    <div id="sideBar">
      <div id="sideBar-sns">
        <div className="facebook-account"></div>
        <div className="instagram-account"></div>
        <div className="naverBlog-account"></div>
        <div className="youtube-account"></div>
      </div>
      <div id="sideBar-scroll">
        <div className="sideBar-scroll-text"> Scroll</div>
        <div id="sideBar-scroll-state"></div>
      </div>
    </div>
  );
}

function Main() {
  const [videoTitle, setVideoTitle] = useState<string>(
    "./images/videoSample.mp4"
  );
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
            // src="./images/videoSample.mp4"
            src={videoTitle}
            type="video/mp4"
            id="video-src"
          />
        </video>
        <div id="video-OnOffBtn">
          <div id="video-onOffBtnImg"></div>
          <div id="video-onOffBtnText">STOP</div>
        </div>
      </div>
      <div id="main-link">
        <div id="main-link-openCloseBtn">
          <div id="openCloseTop"></div>
          <div id="openCloseBottom"></div>
          <div id="openCloseText">OPEN</div>
        </div>
      </div>
      <div id="main-picture-dokdo">
        <div id="main-picture-cloud"></div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div id="container-wrap">
      <div id="container-notice">
        <div id="notice-head">
          <div id="notice-head-introduce">
            <div className="head-English-bar"></div>
            <div className="head-English-Text">Notice</div>
            <div className="head-Title">재단소식</div>
            <div className="haed-Subscrition">
              독도재단의 이슈와
              <br />
              정보를 안내해 드립니다.
            </div>
            <div className="head-contents-moreBtn">
              <div className="moreBtn-horizontal"></div>
              <div className="moreBtn-vertical"></div>
            </div>
          </div>
          <div id="notice-head-contents-title">
            <div className="head-content-title head-content-title-active">
              공지사항
            </div>
            <div className="head-content-title">언론 & 홍보</div>
            <div className="head-content-title">보도자료</div>
          </div>
        </div>
        <div id="notice-contents">
          <div className="content">
            <div className="content-title">
              2021년도 「대학 독도동아리 결성 및 활성화」공고
            </div>
            <div className="content-subscrition">
              (재)독도재단 공고 제2021-10호 2021년도「대학 독도동아리 결성 및
              활성화」사업 참여 동아리를 모집하오니 많은 지원 바랍니다.
              감사합니다.
            </div>
            <div className="content-date">2021-03-17</div>
          </div>
          <div className="content">
            <div className="content-title">직원 채용시험 최종 합격자 공고</div>
            <div className="content-subscrition">
              {" "}
              재단법인 독도재단 직원채용 공고(제2021-1호)에 따라 실시한 직원
              채용시험의 최종합격자를 &lt;첨부&gt;와 같이 공고합니다. 많은 지원
              부탁드립니다.
            </div>
            <div className="content-date">2021-02-23</div>
          </div>
          <div className="content">
            <div className="content-title">
              독도를 상징하는 '도랑'과 '도아' 이모티콘 무료배포!
            </div>
            <div className="content-subscrition">
              안녕하십니까! 독도재단 입니다~ 독도재단에서 10월 '독도의 달'과
              '도민의 날'을 맞아 독도를 상징하는 '도랑'과 '도아'이모티콘 7종을
              전달하게 되었습니다.
            </div>
            <div className="content-date">2020-10-23</div>
          </div>
        </div>
      </div>
      <div id="container-eventScheduleNAlarmZone">
        <div id="eventSchedule">
          <div id="eventSchedule-head">
            <div id="eventSchedule-head-introduce">
              <div className="head-English-bar"></div>
              <div className="head-English-Text">Event</div>
              <div className="head-Title">행사일정</div>
              <div className="haed-Subscrition">
                독도의 다양한 행사에
                <br />
                많은 관심 바랍니다.
              </div>
              <div className="head-contents-moreBtn">
                <div className="moreBtn-horizontal"></div>
                <div className="moreBtn-vertical"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="alarmZone"></div>
      </div>
      <div id="container-magazine"></div>
      <div id="contaienr-logo"></div>
    </div>
  );
}

function Footer() {
  return <div id="footer-wrap"></div>;
}

function App() {
  return (
    <>
      <div id="app-wrap">
        <SideBar />
        <Header />
        <Main />
        <Container />
        <Footer />
      </div>
    </>
  );
}

export default App;
