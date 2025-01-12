/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import propTypes from "prop-types";

export const WeatherContext = createContext({
  place: null,
  setPlace: () => {},
});

export default function WeatherProvider({ children }) {
  const [place, setPlace] = useState(null);

  const [title, setTitle] = useState(() => {
    "Enter a place!";
  });

  useEffect(() => {
    setTitle("Enter a place!");
  }, []);

  return <WeatherContext.Provider value={{ place, setPlace, title, setTitle }}>{children}</WeatherContext.Provider>;
}

WeatherProvider.propTypes = {
  children: propTypes.node.isRequired,
};
