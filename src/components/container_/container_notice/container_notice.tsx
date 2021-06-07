import { CSSProperties, useCallback, useState } from "react";
import "./container_notice.css";

export function ContainerNotice() {
  const [noticeContentsIdx, setNoticeContentsIdx] = useState<number>(0);
  const setMainHeadContentTitle: (idx: number) => CSSProperties = (
    idx: number
  ) =>
    noticeContentsIdx === idx
      ? {
          position: "relative",
          left: "30px",
          background: "#41478f",
          color: "white",
          transition: "all 300ms ease",
        }
      : {};

  function setMainContent(idx: number) {
    if (noticeContentsIdx === idx) {
      return {
        display: "flex",
      };
    } else {
      return {
        display: "none",
      };
    }
  }

  return (
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
              onClick={() => setNoticeContentsIdx(0)}
              style={setMainHeadContentTitle(0)}
            >
              공지사항
            </div>
            <div
              className="head-content-title"
              onClick={() => setNoticeContentsIdx(1)}
              style={setMainHeadContentTitle(1)}
            >
              언론 & 홍보
            </div>
            <div
              className="head-content-title"
              onClick={() => setNoticeContentsIdx(2)}
              style={setMainHeadContentTitle(2)}
            >
              보도자료
            </div>
          </div>
        </div>
        <ul className="notice-contents" style={setMainContent(0)}>
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
            <div className="content-title">직원 채용시험 최종 합격자 공고</div>
            <div className="content-subscrition">
              {" "}
              재단법인 독도재단 직원채용 공고(제2021-1호)에 따라 실시한 직원
              채용시험의 최종합격자를 &lt;첨부&gt;와 같이 공고합니다. 많은 지원
              부탁드립니다.
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
        <ul className="notice-contents" style={setMainContent(1)}>
          <li className="content">
            <div className="content-title">[기고]독도교육주간 활성화해야</div>
            <div className="content-subscrition">클릭시 기사로 연결됩니다.</div>
            <div className="content-date">2021-05-06</div>
          </li>
          <li className="content">
            <div className="content-title">
              상생포럼 15기 3주차-"독도는 한국 영토, 역사적 진실 알려야"
            </div>
            <div className="content-subscrition">클릭시 기사로 연결됩니다.</div>
            <div className="content-date">2021-04-30</div>
          </li>
          <li className="content">
            <div className="content-title">
              독도재단-대구경북공예협동조합, 상호협력'맞손'
            </div>
            <div className="content-subscrition">클릭시 기사로 연결됩니다.</div>
            <div className="content-date">2021-04-26</div>
          </li>
        </ul>
        <ul className="notice-contents" style={setMainContent(2)}>
          <li className="content">
            <div className="content-title">
              [보도자료]일본은 후쿠시마 원전 오염수 방류 결정 즉각 철회하라
            </div>
            <div className="content-subscrition">
              "일본은 후쿠시마 원전 오염수 방류 결정 즉각 철회하라" 독도재단,
              독도향우회, 30일 일본대사관 앞서 규탄성명서 발표 경상북도
              출연기관인 독도재단은"
            </div>
            <div className="content-date">2021-04-30</div>
          </li>
          <li className="content">
            <div className="content-title">
              [보도자료]독도재단, 플라스틱 중리기'고고챌린지'동참
            </div>
            <div className="content-subscrition">
              독도재단, 플라스틱 줄이기'고고 챌린지'참여 일회용품 사용 중리고,
              다회용기 사용 생활화하기로 경상북도 출연기관인 (재)독도재단은
              신순식 사무실
            </div>
            <div className="content-date">2021-04-15</div>
          </li>
          <li className="content">
            <div className="content-title">독도재단, 제3기 자문위원회 발족</div>
            <div className="content-subscrition">
              독도재단, 제3기 자문위원회 발족 "분야별 전문가 의견
              반영...독도수호 플랫폼 강화" 경상북도 출연기관인 독도재단은
              13일(화) 재단 회의실에서 제3의
            </div>
            <div className="content-date">2020-04-13</div>
          </li>
        </ul>
      </div>
      <div id="notice-tail"></div>
    </div>
  );
}
