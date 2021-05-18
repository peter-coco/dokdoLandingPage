import "./sideBar.css";

export function SideBar({
  headerMenuBtnActivate,
}: {
  headerMenuBtnActivate: boolean;
}) {
  return (
    <div
      id="sideBar"
      style={{ display: headerMenuBtnActivate ? "None" : "flex" }}
    >
      <div id="sideBar-sns">
        <div className="facebook-account"></div>
        <div className="instagram-account"></div>
        <div className="naverBlog-account"></div>
        <div className="youtube-account"></div>
      </div>
      <div id="sideBar-scroll">
        <div className="sideBar-scroll-text"> Scroll</div>
        <div id="sideBar-scroll-state"></div>
      </div>
    </div>
  );
}
