import { useCallback } from "react";
import "./footer.css";

export function Footer({
  headerMenuBtnActivate,
}: {
  headerMenuBtnActivate: boolean;
}) {
  const srolltoTopFunc = useCallback(() => {
    window.scrollTo({
      top: 0,
      // left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      id="footer"
      style={{ display: headerMenuBtnActivate ? "None" : "block" }}
    >
      <div id="footer-wrap">
        <div id="footer-top-link">
          <div className="footer-top-link-list-active">개인정보처리방침</div>
          <div className="footer-top-link-list">이용약관</div>
          <div className="footer-top-link-list">이메일무단수집거부</div>
          <div className="footer-top-link-list">홈페이지불편신고</div>
          <div className="footer-top-link-list">사이트맵</div>
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

        <div id="footer-gotoTopBtn" onClick={srolltoTopFunc}>
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
