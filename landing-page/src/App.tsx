import { useState } from "react";

import { Header } from "./source/header/header";
import { SideBar } from "./source/sideBar/sideBar";
import { Main } from "./source/main/main";
import { Container } from "./source/container_/container";
import { Footer } from "./source/footer/footer";

import logo from "./logo.svg";

import "./App.css";

function App() {
  const [mainLinkToggle, setMainLinkToggle] = useState<boolean>(false);

  return (
    <>
      <div id="app-wrap">
        <SideBar />
        <Header mainLinkToggle={mainLinkToggle} />
        <Main
          mainLinkToggle={mainLinkToggle}
          setMainLinkToggle={setMainLinkToggle}
        />
        <Container />
        <Footer />
      </div>
    </>
  );
}

export default App;
