import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import About from "./components/About/About";
import Events from "./components/Events/Events";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
import Register from "./components/AuthPage/AuthPage";
import Layout from "./components/AuthPage/Login";

function App() {
  const List = [
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <About />
                <Events />
                <Sponsors ImageList={List} />;
                <Footer />
              </>
            }
          ></Route>
          <Route path="/auth" element={<Register />}></Route>
          <Route path="/auth/login" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
