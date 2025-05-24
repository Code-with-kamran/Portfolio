import React, { useContext, useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { ThemeContext } from "../../ThemeContext";

const Themetoggle = () => {
  const [theme, settheme] = useState("dark");
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      
        <div className="nav_ac" onClick={themetoggle}>
          <WiMoonAltWaningCrescent4 />
        </div>
       
    </>
  );
};

export default Themetoggle;
