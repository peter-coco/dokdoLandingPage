import { useState } from "react";
import "./container.css";

import banner01 from "../../images/banner/img_logo01.gif";
import banner02 from "../../images/banner/img_logo02.gif";
import banner03 from "../../images/banner/img_logo03.gif";
import banner04 from "../../images/banner/img_logo04.gif";
import banner05 from "../../images/banner/img_logo05.gif";
import banner06 from "../../images/banner/img_logo06.gif";
import banner07 from "../../images/banner/img_logo07.gif";
import banner08 from "../../images/banner/img_logo08.gif";
import banner09 from "../../images/banner/img_logo09.gif";
import banner10 from "../../images/banner/img_logo10.jpg";
import banner11 from "../../images/banner/img_logo11.jpg";

import alarm_banner01 from "../../images/alarmZone_banner/alarmZone_banner(1).jpg";
import alarm_banner02 from "../../images/alarmZone_banner/alarmZone_banner(2).jpg";
import alarm_banner03 from "../../images/alarmZone_banner/alarmZone_banner(3).jpg";
import alarm_banner04 from "../../images/alarmZone_banner/alarmZone_banner(4).jpg";
import alarm_banner05 from "../../images/alarmZone_banner/alarmZone_banner(5).jpg";
import alarm_banner06 from "../../images/alarmZone_banner/alarmZone_banner(6).jpg";
import alarm_banner07 from "../../images/alarmZone_banner/alarmZone_banner(7).png";

export function Container() {
  const [alarmZoneBannerIdx, setAlarmZoneBannerIdx] = useState<number>(0);
  const [noticeContentsIdx, setNoticeContentsIdx] = useState<number>(0);
  const [logoBannerIdx, setLogoBannerIdx] = useState<number>(0);
  const [logoBannerOnOffBtn, setLogoBannerOnOffBtn] = useState<boolean>(true);

  // let alarmZoneTimer = setTimeout(() => {
  //   setAlarmZoneBannerIdx(
  //     alarmZoneBannerIdx + 1 === 6 ? 0 : alarmZoneBannerIdx + 1
  //   );
  //   // console.log(alarmZoneBannerIdx);
  // }, 3000);

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
                  <div
                    className="SlideBtn SlideBtn-prev"
                    onClick={() => {
                      let temp: number = alarmZoneBannerIdx;
                      temp -= 1;
                      if (temp === -1) temp = 5;
                      setAlarmZoneBannerIdx(temp);
                    }}
                  >
                    <div className="SlideBtn-prev-img"></div>
                  </div>
                  <div
                    className="SlideBtn SlideBtn-next"
                    onClick={() => {
                      let temp: number = alarmZoneBannerIdx;
                      temp += 1;
                      if (temp === 6) temp = 0;
                      console.log(temp);
                      setAlarmZoneBannerIdx(temp);
                    }}
                  >
                    <div className="SlideBtn-next-img"></div>
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
