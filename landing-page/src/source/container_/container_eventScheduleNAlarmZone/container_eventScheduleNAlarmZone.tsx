import { useEffect, useState } from "react";
import "./container_eventScheduleNAlarmZone.css";

import alarm_banner01 from "./alarmZone_banner/alarmZone_banner(1).jpg";
import alarm_banner02 from "./alarmZone_banner/alarmZone_banner(2).jpg";
import alarm_banner03 from "./alarmZone_banner/alarmZone_banner(3).jpg";
import alarm_banner04 from "./alarmZone_banner/alarmZone_banner(4).jpg";
import alarm_banner05 from "./alarmZone_banner/alarmZone_banner(5).jpg";
import alarm_banner06 from "./alarmZone_banner/alarmZone_banner(6).jpg";
import alarm_banner07 from "./alarmZone_banner/alarmZone_banner(7).png";

export function ContainerEventScheduleNAlarmZone() {
  const [alarmZoneBannerIdx, setAlarmZoneBannerIdx] = useState<number>(0);

  useEffect(() => {
    const alarmZoneTimer = setInterval(() => {
      setAlarmZoneBannerIdx((pre) => (pre + 1 === 6 ? 0 : pre + 1));
      // console.log(`hello : ${alarmZoneBannerIdx}`);
    }, 3000);
  }, []);

  return (
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
                    setAlarmZoneBannerIdx((pre) =>
                      pre - 1 === -1 ? 5 : pre - 1
                    );
                  }}
                >
                  <div className="SlideBtn-prev-img"></div>
                </div>
                <div
                  className="SlideBtn SlideBtn-next"
                  onClick={() => {
                    setAlarmZoneBannerIdx((pre) =>
                      pre + 1 === 6 ? 0 : pre + 1
                    );
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
  );
}
