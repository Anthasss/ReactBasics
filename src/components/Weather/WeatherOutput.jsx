import { useContext, useEffect, useState } from "react";
import useGetWeather from "../../hooks/useGetWeather";
import { WeatherContext } from "../../contexts/WeatherContext";

export default function WeatherOutput() {
  const { weather } = useGetWeather();
  const { setTitle } = useContext(WeatherContext);
  const [iconUrl, setIconUrl] = useState("https://openweathermap.org/img/wn/01d@2x.png");
  const [weatherMain, setWeatherMain] = useState("Not Found");
  const [weatherDesc, setWeatherDesc] = useState("Not Found");

  useEffect(() => {
    setTitle("The weather is ready!");
  }, [weather, setTitle]);

  useEffect(() => {
    if (!weather) return;

    const iconCode = weather.weather[0].icon;
    setIconUrl(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);

    setWeatherMain(weather.weather[0].main);
    setWeatherDesc(weather.weather[0].description);
  }, [weather]);
  return (
    <div className="p-4 flex flex-col items-center gap-4 w-full">
      {weather && (
        <div className="p-4 pb-8 pt-0 flex flex-col items-center gap-4 w-full">
          <div className="card card-side bg-base-300 shadow-xl">
            <figure>
              <img src={iconUrl} alt="Weather icon" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">The weather is {weatherMain}</h2>
              <p>with {weatherDesc}.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
