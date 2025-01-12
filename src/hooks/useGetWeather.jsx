import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { WeatherContext } from "../contexts/WeatherContext";

export default function useGetWeather() {
  const { place } = useContext(WeatherContext);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    if (!place) return;

    const getLatLong = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=05a35a160e5fce21467ec914ea8291d5`
        );
        setLat(response.data[0].lat);
        setLon(response.data[0].lon);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    getLatLong();
  }, [place]);

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=05a35a160e5fce21467ec914ea8291d5`
        );
        setWeather(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return { weather, loading, error };
}
