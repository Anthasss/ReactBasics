/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("forest");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return <ThemeContext.Provider value={{ theme, handleThemeChange }}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
