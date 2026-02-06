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
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { ErrorNotFound } from "./components/ErrorNotFound";
import { Watch } from "./components/Watch";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/usestatedemo1" element ={<UseStateDemo1/>}></Route>
        <Route path="/usestatedemo2" element ={<UseStateDemo2/>}></Route>
        <Route path="/usestatedemo3" element ={<UseStateDemo3/>}></Route>
        <Route path="/fundemo1" element ={<FunctionDemo1/>}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
