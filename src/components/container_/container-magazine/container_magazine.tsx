import "./container_magazine.css";

export function ContainerMagazine() {
  return (
    <div id="container-magazine">
      <div id="magazine-live-wrap">
        <div id="magazine-live">
          <div id="magazine-live-title">
            <div id="magazine-live-title-img"></div>
            <div id="magazine-live-title-text">Dokdo Live</div>
          </div>
          <div id="magazine-live-video-src">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Q0jiCQ4ceCs?amp;autoplay=1&;playlist=Q0jiCQ4ceCs&loop=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
            ></iframe>
          </div>
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
              <div className="dokdoMagazine-bottom-bottom-Btn">E-book보기</div>
              <div className="dokdoMagazine-bottom-bottom-Btn">매거진신청</div>
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
  );
}
