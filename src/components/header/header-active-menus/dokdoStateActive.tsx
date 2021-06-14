import { useState } from "react";

export function DokdoStateActive() {
  const [adminStateToggle, setAdminStateToggle] = useState(false);
  const [historyToggle, setHistoryToggle] = useState(false);
  const [normalStateToggle, setNormalStateToggle] = useState(false);

  return (
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
  );
}
