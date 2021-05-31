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
        <div className="facebook-account" />
        <div className="instagram-account" />
        <div className="naverBlog-account" />
        <div className="youtube-account" />
      </div>
      <div id="sideBar-scroll">
        <div className="sideBar-scroll-text"> Scroll</div>
        <div id="sideBar-scroll-state" />
      </div>
    </div>
  );
}
