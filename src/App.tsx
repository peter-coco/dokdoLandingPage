import { useEffect, useState } from "react";

import { Header } from "./components/header/header";
import { SideBar } from "./components/sideBar/sideBar";
import { Main } from "./components/main/main";
import { Container } from "./components/container_/container";
import { Footer } from "./components/footer/footer";

import logo from "./logo.svg";

import "./App.css";

function App() {
  const [mainLinkToggle, setMainLinkToggle] = useState(false);
  const [headerMenuBtnActivate, setHeaderMenuBtnActivate] = useState(false);

  useEffect(() => {
    function resizeEventFunc() {
      if (
        window.innerWidth >
        1580 /*&& !headerMenuBtnActivate addEventListener가 시작되면서 얘는 고정이 되버림ggg*/
      ) {
        setHeaderMenuBtnActivate(false);
      }
    }

    window.addEventListener("resize", resizeEventFunc);
    return () => window.removeEventListener("resize", resizeEventFunc);
  }, []);

  return (
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
  );
}

export default App;
