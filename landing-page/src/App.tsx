import React, { useState } from "react";
import logo from "./logo.svg";

import banner01 from "./images/banner/img_logo01.gif";
import banner02 from "./images/banner/img_logo02.gif";
import banner03 from "./images/banner/img_logo03.gif";
import banner04 from "./images/banner/img_logo04.gif";
import banner05 from "./images/banner/img_logo05.gif";
import banner06 from "./images/banner/img_logo06.gif";

import alarm_banner01 from "./images/alarmZone_banner/alarmZone_banner(1).jpg";
import alarm_banner02 from "./images/alarmZone_banner/alarmZone_banner(2).jpg";
import alarm_banner03 from "./images/alarmZone_banner/alarmZone_banner(3).jpg";
import alarm_banner04 from "./images/alarmZone_banner/alarmZone_banner(4).jpg";
import alarm_banner05 from "./images/alarmZone_banner/alarmZone_banner(5).jpg";
import alarm_banner06 from "./images/alarmZone_banner/alarmZone_banner(6).jpg";
import alarm_banner07 from "./images/alarmZone_banner/alarmZone_banner(7).png";

import "./App.css";
// import video from "./images/videoSample.mp4";
import { stringify } from "node:querystring";
import { forEachChild } from "typescript";

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
        <div id="notice-front"></div>
        <div id="notice-wrap">
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
              <div id="notice-head-moreBtn">
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
              <div className="content-title">
                직원 채용시험 최종 합격자 공고
              </div>
              <div className="content-subscrition">
                {" "}
                재단법인 독도재단 직원채용 공고(제2021-1호)에 따라 실시한 직원
                채용시험의 최종합격자를 &lt;첨부&gt;와 같이 공고합니다. 많은
                지원 부탁드립니다.
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
        <div id="notice-tail"></div>
      </div>
      <div id="container-eventScheduleNAlarmZone">
        <div id="eventScheduleNAlarmZone-wrap">
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
                <div id="eventSchedule-head-moreBtn">
                  <div className="moreBtn-horizontal "></div>
                  <div className="moreBtn-vertical"></div>
                </div>
              </div>
            </div>
            <div id="eventSchedule-contents">
              <div className="eventSchedule-content">
                <div className="eventSchedule-content-date">2021-05-20</div>
                <div className="eventSchedule-content-subscription">
                  경남관광박람회
                  <br />
                  독도홍보버스운영
                </div>
                <div className="eventSchedule-content-moreBtn"></div>
              </div>
              <div className="eventSchedule-content">
                <div className="eventSchedule-content-date">2021-05-21</div>
                <div className="eventSchedule-content-subscription">
                  경남관광박람회
                  <br />
                  독도홍보버스운영
                </div>
                <div className="eventSchedule-content-moreBtn"></div>
              </div>
            </div>
          </div>
          <div id="alarmZone">
            <div id="alarmZone-head">
              <div id="alarmZone-head-introduce">
                <div className="head-English-bar"></div>
                <div className="head-English-Text">Banner</div>
                <div className="head-Title">알림존</div>
                <div id="alarmZone-head-SlideBtn">
                  <div className="SlideBtn-prev">
                    <div className="SlideBtn-prev-img"></div>
                  </div>
                  <div className="SlideBtn-next">
                    <div
                      className="SlideBtn-next-img"
                      onClick={() => {
                        // const imgSlider = document.getElementsByClassName(
                        //   "tail-banner"
                        // );
                        // console.log(imgSlider);
                        // for (let i = 0; i < imgSlider.length; i++) {
                        //   if (imgSlider[i].style.display == "none")
                        //     imgSlider[i].style.display = "block";
                        //   else imgSlider[i].style.display = "none";
                        // }

                        const imgSlider = document.getElementsByClassName(
                          "tail-banner"
                        );
                        console.log(imgSlider[5]);
                        const imgSliderWrap = document.getElementById(
                          "tail-Banner-list"
                        );
                        imgSlider.style.transform = "rotate(50deg)";
                        // for (let i = 0; i < imgSlider.length; i++) {
                        //   if (imgSlider[i].style.display == "none")
                        //     imgSlider[i].style.display = "block";
                        //   else imgSlider[i].style.display = "none";
                        // }
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div id="alarmZone-contents-list"></div>
            </div>
            <div id="alarmZone-tail-Banner-wrap">
              <ul id="tail-Banner-list">
                <li className="tail-banner">
                  <img src={alarm_banner01} alt="" />
                </li>
                <li className="tail-banner">
                  <img src={alarm_banner02} alt="" />
                </li>
                <li className="tail-banner">
                  <img src={alarm_banner03} alt="" />
                </li>
                <li className="tail-banner">
                  <img src={alarm_banner04} alt="" />
                </li>
                <li className="tail-banner">
                  <img src={alarm_banner05} alt="" />
                </li>
                <li className="tail-banner">
                  <img src={alarm_banner06} alt="" />
                </li>
                <li className="tail-banner">
                  <img src={alarm_banner07} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="eventScheduleNAlarmZone-tail"></div>
      </div>
      <div id="container-magazine">
        <div id="magazine-live-wrap">
          <div id="magazine-live">
            <div id="magazine-live-title">
              <div id="magazine-live-title-img"></div>
              <div id="magazine-live-title-text">Dokdo Live</div>
            </div>
            <div id="magazine-live-video-src"></div>
            <div id="magazine-live-subscription">
              여기는 독도입니다.
              <br /> 작은 관심이 독도사랑의 첫 걸음 입니다.
            </div>
          </div>
          <div id="magazine-live-info">
            <em>느껴보세요!</em>
            <p>
              <span>아름다운 독도의 숨결</span>을
              <br /> 생생하게 전해드립니다.
            </p>
            <p>
              실시간으로 독도에
              <br /> 사랑의 손길을 보내주세요
            </p>
          </div>
        </div>
        <div id="magazine-back-wrap">
          <div id="magazine-dokdoMagazine">
            <div id="dokdoMagazine-top">
              <div className="head-English-bar"></div>
              <div className="head-English-Text">Magazine</div>
              <div className="head-Title">독도 매거진</div>
              <div id="dokdoMagazine-head-moreBtn">
                <div className="moreBtn-horizontal "></div>
                <div className="moreBtn-vertical"></div>
              </div>
            </div>
            <div id="dokdoMagazine-img"></div>
            <div id="dokdoMagazine-bottom">
              <div id="dokdoMagazine-bottom-top">
                <div id="dokdoMagazine-bottom-top-date">2021.01</div>
                <div id="dokdoMagazine-bottom-top-arrow"></div>
              </div>
              <div id="dokdoMagazine-bottom-title">2020 독도로(가을겨울호)</div>
              <div id="dokdoMagazine-bottom-bottom">
                <div id="dokdoMagazine-bottom-bottom-EBookBtn">E-book보기</div>
                <div id="dokdoMagazine-bottom-bottom-askMagazineBtn">
                  매거진신청
                </div>
              </div>
            </div>
          </div>
          <div id="magazine-dokdo-load">
            <div id="dokdo-load-top-head-title">독도 가는 길</div>
            <div id="dokdo-load-top-head-subscription">
              아직까지 한 번도 경험하지 못하였다면 독도를 느껴보세요! 입도와
              교통편을 안내해 드립니다.
            </div>
            <div id="dokdo-load-top-island-img"></div>
            <div id="dokdo-load-top-arrow"></div>
            <div id="dokdo-load-bottom-contact-title">
              울릉군 독도관리사무소
              <div id="dokdo-load-bottom-contact-number">T.054-790-6646</div>
            </div>
          </div>
        </div>
      </div>
      <div id="container-logo">
        <div id="container-logo-wrap">
          <div id="container-logo-btn">
            <div id="container-logo-prev"></div>
            <div id="container-logo-playNpause"></div>
            <div id="container-logo-next"></div>
          </div>
          <div id="container-logo-list">
            <ul id="container-logo-banner">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div id="footer">
      <div id="footer-wrap">
        <div id="footer-top-link">
          <div>개인정보처리방침</div>
          <div>이용약관</div>
          <div>이메일무단수집거부</div>
          <div>홈페이지불편신고</div>
          <div>사이트맵</div>
        </div>
        <div id="footer-bottom">
          <div id="footer-bottom-top-infor">
            <div>우) 37751 경상북도 포항시 북구 중흥로 231 동양빌딩 9층</div>
            <div>이메일 : dokdo@koreadokdo.or.kr</div>
            <div>대표번호 : 054-272-6513</div>
            <div>팩스번호 : 054-272-6515</div>
          </div>
          <div id="footer-bottom-bottom-rightInfor">
            COPYRIGHT 2019. BY 재단법인 독도재단. ALL RIGHTS RESERVED. Design by
            KOWEB.
          </div>
        </div>
        <div id="footer-sns">
          <div className="sns-wrap">
            <div className="facebook-account"></div>
          </div>
          <div className="sns-wrap">
            <div className="instagram-account"></div>
          </div>
          <div className="sns-wrap">
            <div className="naverBlog-account"></div>
          </div>
          <div className="sns-wrap">
            <div className="youtube-account"></div>
          </div>
        </div>
        <div id="footer-gotoTopBtn">
          <div id="footer-gotoTopBtn-arrow">
            <div id="footer-gotoTopBtn-arrow-left"></div>
            <div id="footer-gotoTopBtn-arrow-right"></div>
          </div>
          <div id="footer-gotoTopBtn-text">TOP</div>
        </div>
      </div>
    </div>
  );
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
