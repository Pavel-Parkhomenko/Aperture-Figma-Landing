import React from "react";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import logo from "./assets/imgs/logo.svg";
import "./styles/App.scss";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar logo={logo}/>
      <Header
        settings={{
          shutter: "1/2000s",
          aperture: "f/11",
          iso: "100",
          location: "Iceland",
        }}
      />
      <Footer logo={logo}/>
    </div>
  );
}

export default App;
