// import { createContext } from "react";

// export const ThemeContext = createContext('dark')


import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});
