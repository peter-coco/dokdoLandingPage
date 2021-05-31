import { useState } from "react";
// import "./header.css";

export function MainBusinessActive() {
  const [mainBusinessPlatformToggle, setMainBusinessPlatformToggle] =
    useState(false);
  const [domesticAdToggle, setDomesticAdToggle] = useState(false);
  const [abroadAdToggle, setAbroadAdToggle] = useState(false);
  const [devContentsToggle, setDevContentsToggle] = useState(false);
  const [eventCultureToggle, setEventCultureToggle] = useState(false);

  return (
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
              visibility: mainBusinessPlatformToggle ? "visible" : "hidden",
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
  );
}
