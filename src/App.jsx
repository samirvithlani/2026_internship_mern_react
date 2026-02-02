import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import ContentComponent from "./components/ContentComponent";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { MapDemo5 } from "./components/MapDemo5";

function App() {


  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <MapDemo5></MapDemo5>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
