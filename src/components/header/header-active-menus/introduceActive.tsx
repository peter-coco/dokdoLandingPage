import { useState } from "react";

export function IntroduceActive() {
  const [noticeToggle, setNoticeToggle] = useState(false);
  const [adminToggle, setAdminToggle] = useState(false);
  const [introduceToggle, setIntroduceToggle] = useState(false);

  return (
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
  );
}
