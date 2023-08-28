import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Card } from "antd";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import Swiper from "./components/Swiper.jsx";
import Navbar from "./components/Navbar";

function App() {
  const generation = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="main-container">
      <Navbar />
      <div>
        {generation.map((e, id) => {
          return <Swiper key={id} name={e} />;
        })}
      </div>
    </div>
  );
}

export default App;
