import { useCallback, useState } from "react";
import "./header.css";

export function Header({
  mainLinkToggle,
  headerMenuBtnActivate,
  setHeaderMenuBtnActivate,
}: {
  mainLinkToggle: boolean;
  headerMenuBtnActivate: boolean;
  setHeaderMenuBtnActivate: Function;
}) {
  const [languageOption, setLanguageOption] = useState(false);
  const [mainBusinessPlatformToggle, setMainBusinessPlatformToggle] =
    useState(false);
  const [domesticAdToggle, setDomesticAdToggle] = useState(false);
  const [abroadAdToggle, setAbroadAdToggle] = useState(false);
  const [devContentsToggle, setDevContentsToggle] = useState(false);
  const [eventCultureToggle, setEventCultureToggle] = useState(false);

  const [pictureDokDoToggle, setPictureDokDoToggle] = useState(false);
  const [videoDokDoToggle, setVideoDokDoToggle] = useState(false);

  const [alarmToggle, setAlarmToggle] = useState(false);
  const [releaseInforToggle, setReleaseInforToggle] = useState(false);
  const [customerBoardInforToggle, setCustomerBoardInforToggle] =
    useState(false);
  const [visionToggle, setVisionToggle] = useState(false);

  const [noticeToggle, setNoticeToggle] = useState(false);
  const [adminToggle, setAdminToggle] = useState(false);
  const [introduceToggle, setIntroduceToggle] = useState(false);

  const [adminStateToggle, setAdminStateToggle] = useState(false);
  const [historyToggle, setHistoryToggle] = useState(false);
  const [normalStateToggle, setNormalStateToggle] = useState(false);

  const languageOptionOnOFFFunc = useCallback(() => {
    setLanguageOption((pre) => !pre);
  }, [setLanguageOption]);

  const headerMenuBtnActivateFunc = useCallback(() => {
    setHeaderMenuBtnActivate((pre: boolean) => !pre);
  }, [setHeaderMenuBtnActivate]);

  return (
    // <img src="" alt=""/>
    <div id="header">
      <div
        id={headerMenuBtnActivate ? "header-logo-active" : "header-logo"}
      ></div>
      <button
        id={headerMenuBtnActivate ? "header-menuBtn-active" : "header-menuBtn"}
        onClick={headerMenuBtnActivateFunc}
      >
        <i></i>
        <i></i>
        <i></i>
      </button>
      <ul
        id="header-menus"
        style={{
          color: mainLinkToggle ? "white" : "#333",
        }}
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
        <div id="header-join">
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
      <div
        id="header-menus-active-wrap"
        style={{
          height: headerMenuBtnActivate ? "100%" : "0px",
          opacity: headerMenuBtnActivate ? "1" : "0",
          visibility: headerMenuBtnActivate ? "visible" : "hidden",
          transition: "all 1s",
        }}
      >
        <div
          id="header-menus-active"
          style={{
            color: mainLinkToggle ? "white" : "#333",
          }}
        >
          <li className="header-menu-active mainBusiness">
            <div>주요사업</div>
            <ul className="header-sub-menu-active">
              <li
                className="sub-menu-active"
                onClick={() => {
                  setMainBusinessPlatformToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">플랫폼</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{
                        opacity: mainBusinessPlatformToggle ? "0" : "1",
                      }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: mainBusinessPlatformToggle ? "100%" : "0px",
                    visibility: mainBusinessPlatformToggle
                      ? "visible"
                      : "hidden",
                    opacity: mainBusinessPlatformToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>사이버전략센터 [K-독도] 운영</li>
                  <li>매거진 독도로 제작</li>
                </ul>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setDomesticAdToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">홍보(국내)</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: domesticAdToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: domesticAdToggle ? "100%" : "0px",
                    visibility: domesticAdToggle ? "visible" : "hidden",
                    opacity: domesticAdToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>독도 바로알기</li>
                  <li>찾아가는 독도 바로전</li>
                  <li>우리땅 독도밟기</li>
                  <li>대학 독도동아리 결성 및 활성화</li>
                </ul>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setAbroadAdToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">홍보(국외)</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: abroadAdToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: abroadAdToggle ? "100%" : "0px",
                    visibility: abroadAdToggle ? "visible" : "hidden",
                    opacity: abroadAdToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>국내체류 외국인 독도탐방</li>
                  <li>세계인과 함께하는 글로벌 독도</li>
                  <li>세계 청년 독도평화회의</li>
                </ul>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setDevContentsToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">
                    동해(독도)기반 콘텐츠개발
                  </div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: devContentsToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: devContentsToggle ? "100%" : "0px",
                    visibility: devContentsToggle ? "visible" : "hidden",
                    opacity: devContentsToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>독도 라운드테이블 운영</li>
                  <li>동해 및 독도 교육홍보 자료개발</li>
                  <li>한일 독도 진실 추구 실천 포럼</li>
                </ul>
                <div className="sub-menu-arrowDown-active"></div>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setEventCultureToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">독도문화행사</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: eventCultureToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: eventCultureToggle ? "100%" : "0px",
                    visibility: eventCultureToggle ? "visible" : "hidden",
                    opacity: eventCultureToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>독도문화대축제</li>
                  <li>독도문예대전</li>
                </ul>
              </li>
            </ul>
          </li>
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
          <li className="header-menu-active board">
            <div>알림마당</div>
            <ul className="header-sub-menu-active">
              <li
                className="sub-menu-active"
                onClick={() => {
                  setAlarmToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">재단알림</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: alarmToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: alarmToggle ? "100%" : "0px",
                    visibility: alarmToggle ? "visible" : "hidden",
                    opacity: alarmToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>공지사항</li>
                  <li>카드뉴스</li>
                  <li>보도자료</li>
                  <li>언론 홍보</li>
                  <li>행사안내</li>
                </ul>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setReleaseInforToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">정보공개</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: releaseInforToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: releaseInforToggle ? "100%" : "0px",
                    visibility: releaseInforToggle ? "visible" : "hidden",
                    opacity: releaseInforToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>정보공개제도안내</li>
                  <li>업무처리절차</li>
                  <li>정보공개접수안내</li>
                  <li>불복구제절차</li>
                  <li>계약정보공개</li>
                  <li>사업실명제</li>
                </ul>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setCustomerBoardInforToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">고객광장</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: customerBoardInforToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: customerBoardInforToggle ? "100%" : "0px",
                    visibility: customerBoardInforToggle ? "visible" : "hidden",
                    opacity: customerBoardInforToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>고객광장</li>
                  <li>독도교육신청</li>
                  <li>홍보버스신청</li>
                  <li>전시자료신청</li>
                </ul>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setVisionToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">윤리경영</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: visionToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: visionToggle ? "100%" : "0px",
                    visibility: visionToggle ? "visible" : "hidden",
                    opacity: visionToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>윤리헌장</li>
                  <li>내부신고시스템</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="header-menu-active introduce">
            <div>기관소개</div>
            <ul className="header-sub-menu-active">
              <li
                className="sub-menu-active"
                onClick={() => {
                  setIntroduceToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">재단소개</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: introduceToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: introduceToggle ? "100%" : "0px",
                    visibility: introduceToggle ? "visible" : "hidden",
                    opacity: introduceToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>인사말</li>
                  <li>기관연혁</li>
                  <li>비전/경영방침</li>
                  <li>조직도</li>
                  <li>찾아오시는길</li>
                </ul>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setAdminToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">열린경영</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: adminToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: adminToggle ? "100%" : "0px",
                    visibility: adminToggle ? "visible" : "hidden",
                    opacity: adminToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>국민참여</li>
                  <li>고객헌장</li>
                  <li>인권경영</li>
                </ul>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setNoticeToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">통합공시</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: noticeToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: noticeToggle ? "100%" : "0px",
                    visibility: noticeToggle ? "visible" : "hidden",
                    opacity: noticeToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>공개자료</li>
                  <li>업무추진비</li>
                  <li>경영공시</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="header-menu-active dokdoState">
            <div>독도현황</div>
            <ul className="header-sub-menu-active">
              <li className="sub-menu-active">
                <div className="sub-menu-title-active">정부입장</div>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setNormalStateToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">일반현황</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: normalStateToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: normalStateToggle ? "100%" : "0px",
                    visibility: normalStateToggle ? "visible" : "hidden",
                    opacity: normalStateToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>행정구역</li>
                  <li>지리적 위치</li>
                  <li>구성</li>
                </ul>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setHistoryToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">독도역사</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: historyToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: historyToggle ? "100%" : "0px",
                    visibility: historyToggle ? "visible" : "hidden",
                    opacity: historyToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>독도의 진실</li>
                  <li>독도연대기</li>
                  <li>지명변천</li>
                  <li>문헌자료</li>
                  <li>역사 속 인물</li>
                </ul>
              </li>
              <li
                className="sub-menu-active"
                onClick={() => {
                  setAdminStateToggle((pre) => !pre);
                }}
              >
                <div className="sub-menu-title-active">
                  <div className="sub-menu-title-text-active">관리현황</div>
                  <div className="sub-menu-addBtn-active">
                    <div
                      className="sub-menu-vetical-active"
                      style={{ opacity: adminStateToggle ? "0" : "1" }}
                    ></div>
                    <div className="sub-menu-horizontal-active"></div>
                  </div>
                </div>
                <ul
                  className="sub-menu-sub-menu-active"
                  style={{
                    height: adminStateToggle ? "100%" : "0px",
                    visibility: adminStateToggle ? "visible" : "hidden",
                    opacity: adminStateToggle ? "1" : "0",
                    transition: "all 300ms",
                  }}
                >
                  <li>독도관련 부처별 관리현황</li>
                  <li>독도사람들</li>
                  <li>시설물</li>
                  <li>독도관리를 위한 관계 법령</li>
                  <li>입도/교통편</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="header-menu-active K-Dokdo">
            <div>K-독도</div>
            <div className="menu-arrow-active board-arrow"></div>
          </li>
        </div>
      </div>
    </div>
  );
}
