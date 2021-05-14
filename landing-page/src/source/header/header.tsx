import { useCallback, useState } from "react";
import "./header.css";

export function Header({ mainLinkToggle }: { mainLinkToggle: boolean }) {
  const [languageOption, setLanguageOption] = useState<boolean>(false);

  const languageOptionOnOFFFunc = useCallback(() => {
    setLanguageOption((pre) => !pre);
  }, [setLanguageOption]);

  return (
    // <img src="" alt=""/>
    <div id="header">
      <div id="header-logo"></div>
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
          <div id="login-img"></div>
          <div className="header-text">로그인</div>
        </div>
        <div id="header-join">
          <div id="join-img"></div>
          <div className="header-text">회원가입</div>
        </div>
        <div id="header-languages">
          <div id="header-language-now" onClick={languageOptionOnOFFFunc}>
            <div className="header-text language-now">한국어</div>
            <div id="header-language-arrow"></div>
          </div>
          <div
            id="header-language-option"
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
    </div>
  );
}
