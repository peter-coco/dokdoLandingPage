import { useState } from "react";

export function BoardActive() {
  const [alarmToggle, setAlarmToggle] = useState(false);
  const [releaseInforToggle, setReleaseInforToggle] = useState(false);
  const [customerBoardInforToggle, setCustomerBoardInforToggle] =
    useState(false);
  const [visionToggle, setVisionToggle] = useState(false);

  return (
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
  );
}
