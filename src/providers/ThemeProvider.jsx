import { ThemeContext } from "../contexts/ThemeContext";
import { useState } from "react";
import PropTypes from "prop-types";

export default function ThemeProvide({ children }) {
  const [theme, setTheme] = useState("forest");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return <ThemeContext.Provider value={{ theme, handleThemeChange }}>{children}</ThemeContext.Provider>;
}

ThemeProvide.propTypes = {
  children: PropTypes.node.isRequired,
};
