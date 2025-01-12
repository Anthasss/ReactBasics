import { useContext, useState } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

export default function PlaceInput() {
  const { setPlace } = useContext(WeatherContext);
  const { title, setTitle } = useContext(WeatherContext);

  const [input, setInput] = useState("");

  return (
    <div className="p-4 flex flex-col items-center gap-4 w-full">
      <h1 className="font-bold text-5xl">{title}</h1>

      <div className="w-[80%] md:grid-cols-[1fr,auto] grid gap-4">
        <input
          type="text"
          placeholder="Type here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input input-bordered input-primary input-lg"
        />

        <button
          onClick={() => {
            if (input.trim()) {
              setPlace(input.trim());

              setTitle("Getting Weather...");
            }
          }}
          className="btn btn-primary btn-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
}
