import PlaceInput from "../components/Weather/PlaceInput";
import WeatherOutput from "../components/Weather/WeatherOutput";

import WeatherProvider from "../contexts/WeatherContext";
import useGetWeather from "../hooks/useGetWeather";

export default function WeatherPage() {
  const weather = useGetWeather();
  return (
    <WeatherProvider>
      <div className={`grid w-full h-screen ${weather ? "grid-rows-2" : "grid-rows-1"}`}>
        <div className={`w-full flex items-center justify-center ${!weather && "h-screen"}`}>
          <PlaceInput />
        </div>

        {weather && (
          <div className="w-full flex items-center justify-center">
            <WeatherOutput />
          </div>
        )}
      </div>
    </WeatherProvider>
  );
}
