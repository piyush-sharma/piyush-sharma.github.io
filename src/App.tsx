import React from "react";
import { useState, createContext } from "react";
import "./App.css";
import DarkModeSlider from "./DarkModeSlider";

interface IDarkModeContextType {
  darkMode: "light" | "dark";
  setDarkMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export const DarkModeContext = createContext<IDarkModeContextType | null>(null);

function App() {
  const [darkMode, setDarkMode] = useState<"dark" | "light">(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        style={{
          background: darkMode === "light" ? "white" : "#101414",
          width: "100vw",
          height: "100vh",
        }}
      >
        <DarkModeSlider />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
