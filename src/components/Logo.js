import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import whiteLogo from "../assets/images/Kamran-w.png";
import blackLogo from "../assets/images/Kamran-b.png";

const Logo = () => {
  const { theme } = useContext(ThemeContext);

  const logoSrc = theme === "dark" ? whiteLogo : blackLogo;

  return <img src={logoSrc} alt="Kamran Logo" />;
};

export default Logo;
