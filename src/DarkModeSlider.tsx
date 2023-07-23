import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "./App";
import "./App.css";
import moon from "./images/moon.png";
import sun from "./images/sun.png";

const DarkModeSlider = () => {
  const usedContext = useContext(DarkModeContext);
  const sliderState = usedContext!.darkMode;
  const setSliderState = usedContext!.setDarkMode;
  const handleToggle = () => {
    setSliderState(sliderState === "dark" ? "light" : "dark");
  };

  return (
    <>
      <label className="switchbox">
        <img className="sun" src={sun} alt="Light Mode" draggable="false" />
        <img className="moon" src={moon} alt="Dark Mode" draggable="false" />
        <input
          type="checkbox"
          checked={sliderState === "dark" ? true : false}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default DarkModeSlider;
