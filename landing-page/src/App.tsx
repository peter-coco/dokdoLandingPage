import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

import banner01 from "./images/banner/img_logo01.gif";
import banner02 from "./images/banner/img_logo02.gif";
import banner03 from "./images/banner/img_logo03.gif";
import banner04 from "./images/banner/img_logo04.gif";
import banner05 from "./images/banner/img_logo05.gif";
import banner06 from "./images/banner/img_logo06.gif";
import banner07 from "./images/banner/img_logo07.gif";
import banner08 from "./images/banner/img_logo08.gif";
import banner09 from "./images/banner/img_logo09.gif";
import banner10 from "./images/banner/img_logo10.jpg";
import banner11 from "./images/banner/img_logo11.jpg";

import alarm_banner01 from "./images/alarmZone_banner/alarmZone_banner(1).jpg";
import alarm_banner02 from "./images/alarmZone_banner/alarmZone_banner(2).jpg";
import alarm_banner03 from "./images/alarmZone_banner/alarmZone_banner(3).jpg";
import alarm_banner04 from "./images/alarmZone_banner/alarmZone_banner(4).jpg";
import alarm_banner05 from "./images/alarmZone_banner/alarmZone_banner(5).jpg";
import alarm_banner06 from "./images/alarmZone_banner/alarmZone_banner(6).jpg";
import alarm_banner07 from "./images/alarmZone_banner/alarmZone_banner(7).png";

import main_menu01 from "./images/main_img/img_link01.svg";
import main_menu02 from "./images/main_img/img_link02.svg";
import main_menu03 from "./images/main_img/img_link03.svg";
import main_menu04 from "./images/main_img/img_link04.svg";
import main_menu05 from "./images/main_img/img_link05.svg";
import main_menu06 from "./images/main_img/img_link06.svg";
import main_menu07 from "./images/main_img/img_link07.svg";
import main_menu08 from "./images/main_img/img_link08.svg";
import main_menu09 from "./images/main_img/img_link09.svg";
import main_menu10 from "./images/main_img/img_link10.svg";

import "./App.css";

function Header({ mainLinkToggle }: { mainLinkToggle: boolean }) {
  const [languageOption, setLanguageOption] = useState<boolean>(false);
  return (
    // <img src="" alt=""/>
    <div id="header">
      <div id="header-logo"></div>
      <ul
        id="header-menus"
        style={mainLinkToggle ? { color: "white" } : { color: "#333" }}
      >
        <li className="header-menu mainBusiness">
          <div>주요사업</div>
          <div className="menu-arrow mainBusiness-arrow"></div>
          <ul className="header-sub-menu">
            <li className="sub-menu">
              <div className="sub-menu-title">플랫폼</div>
              <ul className="sub-menu-sub-menu">
                <li>사이버전략센터 [K-독도] 운영</li>
                <li>매거진 독도로 제작</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">홍보(국내)</div>
              <ul className="sub-menu-sub-menu">
                <li>독도 바로알기</li>
                <li>찾아가는 독도 바로전</li>
                <li>우리땅 독도밟기</li>
                <li>대학 독도동아리 결성 및 활성화</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">홍보(국외)</div>
              <ul className="sub-menu-sub-menu">
                <li>국내체류 외국인 독도탐방</li>
                <li>세계인과 함께하는 글로벌 독도</li>
                <li>세계 청년 독도평화회의</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">동해(독도)기반 콘텐츠개발</div>
              <ul className="sub-menu-sub-menu">
                <li>독도 라운드테이블 운영</li>
                <li>동해 및 독도 교육홍보 자료개발</li>
                <li>한일 독도 진실 추구 실천 포럼</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">독도문화행사</div>
              <ul className="sub-menu-sub-menu">
                <li>독도문화대축제</li>
                <li>독도문예대전</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
          </ul>
        </li>
        <li className="header-menu datas">
          <div>자료실</div>
          <div className="menu-arrow data-arrow"></div>
          <ul className="header-sub-menu">
            <li className="sub-menu">
              <div className="sub-menu-title">독도사진</div>
              <ul className="sub-menu-sub-menu">
                <li>독도</li>
                <li>식물</li>
                <li>조류</li>
                <li>생물</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">독도영상</div>
              <ul className="sub-menu-sub-menu">
                <li>홍보영상</li>
                <li>언론영상</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">연구자료</div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">매거진</div>
            </li>
            <li className="sub-menu">
              <div>매거진신청</div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">홍보관</div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">LIVE 독도영상</div>
            </li>
          </ul>
        </li>
        <li className="header-menu board">
          <div>알림마당</div>
          <div className="menu-arrow board-arrow"></div>
          <ul className="header-sub-menu">
            <li className="sub-menu">
              <div className="sub-menu-title">재단알림</div>
              <ul className="sub-menu-sub-menu">
                <li>공지사항</li>
                <li>카드뉴스</li>
                <li>보도자료</li>
                <li>언론 홍보</li>
                <li>행사안내</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">정보공개</div>
              <ul className="sub-menu-sub-menu">
                <li>정보공개제도안내</li>
                <li>업무처리절차</li>
                <li>정보공개접수안내</li>
                <li>불복구제절차</li>
                <li>계약정보공개</li>
                <li>사업실명제</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">고객광장</div>
              <ul className="sub-menu-sub-menu">
                <li>고객광장</li>
                <li>독도교육신청</li>
                <li>홍보버스신청</li>
                <li>전시자료신청</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">윤리경영</div>
              <ul className="sub-menu-sub-menu">
                <li>윤리헌장</li>
                <li>내부신고시스템</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
          </ul>
        </li>
        <li className="header-menu introduce">
          <div>기관소개</div>
          <div className="menu-arrow board-arrow"></div>
          <ul className="header-sub-menu">
            <li className="sub-menu">
              <div className="sub-menu-title">재단소개</div>
              <ul className="sub-menu-sub-menu">
                <li>인사말</li>
                <li>기관연혁</li>
                <li>비전/경영방침</li>
                <li>조직도</li>
                <li>찾아오시는길</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">열린경영</div>
              <ul className="sub-menu-sub-menu">
                <li>국민참여</li>
                <li>고객헌장</li>
                <li>인권경영</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">통합공시</div>
              <ul className="sub-menu-sub-menu">
                <li>공개자료</li>
                <li>업무추진비</li>
                <li>경영공시</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
          </ul>
        </li>
        <li className="header-menu dokdoState">
          <div>독도현황</div>
          <div className="menu-arrow board-arrow"></div>
          <ul className="header-sub-menu">
            <li className="sub-menu">
              <div className="sub-menu-title">정부입장</div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">일반현황</div>
              <ul className="sub-menu-sub-menu">
                <li>행정구역</li>
                <li>지리적 위치</li>
                <li>구성</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">독도역사</div>
              <ul className="sub-menu-sub-menu">
                <li>독도의 진실</li>
                <li>독도연대기</li>
                <li>지명변천</li>
                <li>문헌자료</li>
                <li>역사 속 인물</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
            <li className="sub-menu">
              <div className="sub-menu-title">관리현황</div>
              <ul className="sub-menu-sub-menu">
                <li>독도관련 부처별 관리현황</li>
                <li>독도사람들</li>
                <li>시설물</li>
                <li>독도관리를 위한 관계 법령</li>
                <li>입도/교통편</li>
              </ul>
              <div className="sub-menu-arrowDown"></div>
            </li>
          </ul>
        </li>
        <li className="header-menu K-Dokdo">
          <div>K-독도</div>
          <div className="menu-arrow board-arrow"></div>
        </li>
      </ul>
      <div id="header-utils">
        <div id="header-login">
          <div id="login-img"></div>
          <div className="header-text">로그인</div>
        </div>
        <div id="header-join">
          <div id="join-img"></div>
          <div className="header-text">회원가입</div>
        </div>
        <div id="header-languages">
          <div
            id="header-language-now"
            onClick={() => {
              setLanguageOption((pre) => !pre);
            }}
          >
            <div className="header-text language-now">한국어</div>
            <div id="header-language-arrow"></div>
          </div>
          <div
            id="header-language-option"
            style={
              languageOption
                ? {
                    height: "150px",
                    visibility: "visible",
                    opacity: "1",
                    transition: "all 300ms",
                  }
                : {
                    height: "0px",
                    visibility: "hidden",
                    opacity: "0",
                    transition: "all 300ms",
                  }
            }
          >
            <div className="languages">한국어</div>
            <div className="languages">English</div>
            <div className="languages">日本語</div>
            <div className="languages">中文</div>
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

function Main({
  mainLinkToggle,
  setMainLinkToggle,
}: {
  mainLinkToggle: boolean;
  setMainLinkToggle: Function;
}) {
  const [videoTitle, setVideoTitle] = useState<string>(
    "./images/videoSample.mp4"
  );
  const [videoOnOffToggle, setVideoOnOffToggle] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    console.log(window.innerWidth);
  }, [window.innerWidth]);

  window.addEventListener("resize", () => {
    // console.log(window.innerWidth, windowWidth);
    setWindowWidth(window.innerWidth);
  });

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
          onClick={() => {
            setVideoOnOffToggle((pre) => !pre);
          }}
        >
          <div id="video-OffBtnImg"></div>
          <div className="video-OnOffBtnText">STOP</div>
        </div>
        <div
          className="video-OnOffBtn"
          style={videoOnOffToggle ? { display: "flex" } : { display: "none" }}
          onClick={() => {
            setVideoOnOffToggle((pre) => !pre);
          }}
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
        <div
          id="main-link-openCloseBtn"
          onClick={() => {
            setMainLinkToggle(!mainLinkToggle);
          }}
        >
          <div
            id="openCloseTop"
            style={
              mainLinkToggle
                ? { transform: `rotate(35deg)` }
                : { transform: `rotate(-35deg)` }
            }
          ></div>
          <div
            id="openCloseBottom"
            style={
              mainLinkToggle
                ? { transform: `rotate(-35deg)` }
                : { transform: `rotate(35deg)` }
            }
          ></div>
          <div
            id="openCloseText"
            style={mainLinkToggle ? { display: "none" } : { display: "block" }}
          >
            OPEN
          </div>
          <div
            id="openCloseText"
            style={mainLinkToggle ? { display: "block" } : { display: "none" }}
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
            // style={
            //   mainLinkToggle
            //     ? { display: "flex", animation: "fadeIn 2s" }
            //     : { display: "none", animation: "fadeOut 2s" }
            // }
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

function Container() {
  const [alarmZoneBannerIdx, setAlarmZoneBannerIdx] = useState<number>(0);
  const [noticeContentsIdx, setNoticeContentsIdx] = useState<number>(0);
  const [logoBannerIdx, setLogoBannerIdx] = useState<number>(0);
  const [logoBannerOnOffBtn, setLogoBannerOnOffBtn] = useState<boolean>(true);

  let alarmZoneTimer = setTimeout(() => {
    setAlarmZoneBannerIdx(
      alarmZoneBannerIdx + 1 === 6 ? 0 : alarmZoneBannerIdx + 1
    );
    // console.log(alarmZoneBannerIdx);
  }, 3000);

  let logoBannerTimer = setTimeout(() => {
    if (!logoBannerOnOffBtn) {
      clearTimeout(logoBannerTimer);
    } else {
      let temp: number = logoBannerIdx + 1;
      if (temp === 5) temp = 0;
      setLogoBannerIdx(temp);
    }
  }, 3000);

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
              <div
                className="head-content-title"
                onClick={() => {
                  setNoticeContentsIdx(0);
                }}
                style={
                  noticeContentsIdx === 0
                    ? {
                        position: "relative",
                        left: "40px",
                        background: "#41478f",
                        color: "white",
                        transition: "all 300ms ease",
                      }
                    : {}
                }
              >
                공지사항
              </div>
              <div
                className="head-content-title"
                onClick={() => {
                  setNoticeContentsIdx(1);
                }}
                style={
                  noticeContentsIdx === 1
                    ? {
                        position: "relative",
                        left: "40px",
                        background: "#41478f",
                        color: "white",
                        transition: "all 300ms ease",
                      }
                    : {}
                }
              >
                언론 & 홍보
              </div>
              <div
                className="head-content-title"
                onClick={() => {
                  setNoticeContentsIdx(2);
                }}
                style={
                  noticeContentsIdx === 2
                    ? {
                        position: "relative",
                        left: "40px",
                        background: "#41478f",
                        color: "white",
                        transition: "all 300ms ease",
                      }
                    : {}
                }
              >
                보도자료
              </div>
            </div>
          </div>
          <ul
            className="notice-contents"
            style={
              noticeContentsIdx === 0
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <li className="content">
              <div className="content-title">
                2021년도 「대학 독도동아리 결성 및 활성화」공고
              </div>
              <div className="content-subscrition">
                (재)독도재단 공고 제2021-10호 2021년도「대학 독도동아리 결성 및
                활성화」사업 참여 동아리를 모집하오니 많은 지원 바랍니다.
                감사합니다.
              </div>
              <div className="content-date">2021-03-17</div>
            </li>
            <li className="content">
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
            </li>
            <li className="content">
              <div className="content-title">
                독도를 상징하는 '도랑'과 '도아' 이모티콘 무료배포!
              </div>
              <div className="content-subscrition">
                안녕하십니까! 독도재단 입니다~ 독도재단에서 10월 '독도의 달'과
                '도민의 날'을 맞아 독도를 상징하는 '도랑'과 '도아'이모티콘 7종을
                전달하게 되었습니다.
              </div>
              <div className="content-date">2020-10-23</div>
            </li>
          </ul>
          <div
            className="notice-contents"
            style={
              noticeContentsIdx === 1
                ? {
                    display: "flex",
                  }
                : { display: "none" }
            }
          >
            <div className="content">
              <div className="content-title">[기고]독도교육주간 활성화해야</div>
              <div className="content-subscrition">
                클릭시 기사로 연결됩니다.
              </div>
              <div className="content-date">2021-05-06</div>
            </div>
            <div className="content">
              <div className="content-title">
                상생포럼 15기 3주차-"독도는 한국 영토, 역사적 진실 알려야"
              </div>
              <div className="content-subscrition">
                클릭시 기사로 연결됩니다.
              </div>
              <div className="content-date">2021-04-30</div>
            </div>
            <div className="content">
              <div className="content-title">
                독도재단-대구경북공예협동조합, 상호협력'맞손'
              </div>
              <div className="content-subscrition">
                클릭시 기사로 연결됩니다.
              </div>
              <div className="content-date">2021-04-26</div>
            </div>
          </div>
          <div
            className="notice-contents"
            style={
              noticeContentsIdx === 2
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <div className="content">
              <div className="content-title">
                [보도자료]일본은 후쿠시마 원전 오염수 방류 결정 즉각 철회하라
              </div>
              <div className="content-subscrition">
                "일본은 후쿠시마 원전 오염수 방류 결정 즉각 철회하라" 독도재단,
                독도향우회, 30일 일본대사관 앞서 규탄성명서 발표 경상북도
                출연기관인 독도재단은"
              </div>
              <div className="content-date">2021-04-30</div>
            </div>
            <div className="content">
              <div className="content-title">
                [보도자료]독도재단, 플라스틱 중리기'고고챌린지'동참
              </div>
              <div className="content-subscrition">
                독도재단, 플라스틱 줄이기'고고 챌린지'참여 일회용품 사용 중리고,
                다회용기 사용 생활화하기로 경상북도 출연기관인 (재)독도재단은
                신순식 사무실
              </div>
              <div className="content-date">2021-04-15</div>
            </div>
            <div className="content">
              <div className="content-title">
                독도재단, 제3기 자문위원회 발족
              </div>
              <div className="content-subscrition">
                독도재단, 제3기 자문위원회 발족 "분야별 전문가 의견
                반영...독도수호 플랫폼 강화" 경상북도 출연기관인 독도재단은
                13일(화) 재단 회의실에서 제3의
              </div>
              <div className="content-date">2020-04-13</div>
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
                  <div className="SlideBtn SlideBtn-prev">
                    <div
                      className="SlideBtn-prev-img"
                      onClick={() => {
                        let temp: number = alarmZoneBannerIdx;
                        temp -= 1;
                        if (temp === -1) temp = 5;
                        setAlarmZoneBannerIdx(temp);
                      }}
                    ></div>
                  </div>
                  <div className="SlideBtn SlideBtn-next">
                    <div
                      className="SlideBtn-next-img"
                      onClick={() => {
                        let temp: number = alarmZoneBannerIdx;
                        temp += 1;
                        if (temp === 6) temp = 0;
                        setAlarmZoneBannerIdx(temp);
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="alarmZone-tail-Banner-wrap">
              <ul
                id="tail-Banner-list"
                style={{
                  transition: "1000ms",
                  transform: `translate(${alarmZoneBannerIdx * -280}px)`,
                }}
              >
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
            <div id="dokdoMagazine-bottom">
              <div id="dokdoMagazine-img"></div>
              <div id="dokdoMagazine-bottom-top">
                <div id="dokdoMagazine-bottom-top-date">2021.01</div>
                <div id="dokdoMagazine-bottom-top-arrow"></div>
              </div>
              <div id="dokdoMagazine-bottom-title">2020 독도로(가을겨울호)</div>
              <div id="dokdoMagazine-bottom-bottom">
                <div className="dokdoMagazine-bottom-bottom-Btn">
                  E-book보기
                </div>
                <div className="dokdoMagazine-bottom-bottom-Btn">
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
            <div id="dokdo-load-top-arrow-btn">
              <div id="dokdo-load-top-arrow"></div>
            </div>
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
            <div
              id="container-logo-prev"
              onClick={() => {
                let temp: number = logoBannerIdx;
                temp -= 1;
                if (temp === -1) temp = 4;
                setLogoBannerIdx(temp);
              }}
            ></div>
            <div
              id="container-logo-play"
              onClick={() => {
                setLogoBannerOnOffBtn((pre) => !pre);
              }}
              style={
                logoBannerOnOffBtn ? { display: "none" } : { display: "block" }
              }
            ></div>
            <div
              id="container-logo-pause"
              onClick={() => {
                setLogoBannerOnOffBtn((pre) => !pre);
              }}
              style={
                logoBannerOnOffBtn ? { display: "block" } : { display: "none" }
              }
            ></div>
            <div
              id="container-logo-next"
              onClick={() => {
                let temp: number = logoBannerIdx;
                temp += 1;
                if (temp === 5) temp = 0;
                setLogoBannerIdx(temp);
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
    </div>
  );
}

function Footer() {
  return (
    <div id="footer">
      <div id="footer-wrap">
        <div id="footer-top-link">
          <div className="footer-top-link-list-active">개인정보처리방침</div>
          <div className="footer-top-link-list">이용약관</div>
          <div className="footer-top-link-list">이메일무단수집거부</div>
          <div className="footer-top-link-list">홈페이지불편신고</div>
          <div className="footer-top-link-list">사이트맵</div>
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
        <div
          id="footer-gotoTopBtn"
          onClick={() => {
            window.scrollTo({
              top: 0,
              // left: 0,
              behavior: "smooth",
            });
          }}
        >
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
  const [mainLinkToggle, setMainLinkToggle] = useState<boolean>(false);

  return (
    <>
      <div id="app-wrap">
        <SideBar />
        <Header mainLinkToggle={mainLinkToggle} />
        <Main
          mainLinkToggle={mainLinkToggle}
          setMainLinkToggle={setMainLinkToggle}
        />
        <Container />
        <Footer />
      </div>
    </>
  );
}

export default App;
