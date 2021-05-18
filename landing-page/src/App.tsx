import { useEffect, useState } from "react";

import { Header } from "./source/header/header";
import { SideBar } from "./source/sideBar/sideBar";
import { Main } from "./source/main/main";
import { Container } from "./source/container_/container";
import { Footer } from "./source/footer/footer";

import logo from "./logo.svg";

import "./App.css";

function App() {
  const [mainLinkToggle, setMainLinkToggle] = useState(false);
  const [headerMenuBtnActivate, setHeaderMenuBtnActivate] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth > 1580 && !headerMenuBtnActivate) {
  //       setHeaderMenuBtnActivate((pre) => !pre);
  //     }
  //   });
  // }, [headerMenuBtnActivate, setHeaderMenuBtnActivate]);

  return (
    <>
      <div id="app-wrap">
        <SideBar headerMenuBtnActivate={headerMenuBtnActivate} />
        <Header
          mainLinkToggle={mainLinkToggle}
          setHeaderMenuBtnActivate={setHeaderMenuBtnActivate}
          headerMenuBtnActivate={headerMenuBtnActivate}
        />
        <Main
          mainLinkToggle={mainLinkToggle}
          setMainLinkToggle={setMainLinkToggle}
          headerMenuBtnActivate={headerMenuBtnActivate}
        />
        <Container headerMenuBtnActivate={headerMenuBtnActivate} />
        <Footer headerMenuBtnActivate={headerMenuBtnActivate} />
      </div>
    </>
  );
}

export default App;
