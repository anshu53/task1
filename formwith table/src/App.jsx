import { useState } from "react";
import LogIn from "./LogIn";
import "./App.css";
import Mainscreen from "./Mainscreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidevan from "./sidenav";
import Home from "./Home";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/sidenav" element={<Sidevan />} />
            <Route path="/" element={<LogIn />} />
            <Route path="/mainscreen" element={<Mainscreen />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
