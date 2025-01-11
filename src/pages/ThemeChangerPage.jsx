import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeChangerPage() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  return (
    <div className="flex grow border-blue-500 border-2">
      <div className="w-full grid grid-cols-[1fr,auto]">
        {/* contents */}
        <div className="border-2 border-green-500">
          <h1>{theme}</h1>
        </div>

        {/* theme toggles */}
        <div className=" border-red-500 border-2 px-8 py-6 sticky top-0">
          <h1 className="mb-6 font-bold">Theme Toggles</h1>

          {/* forest */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Forest</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary"
                value={"forest"}
                onChange={handleThemeChange}
                checked={theme === "forest"}
              />
            </label>
          </div>

          {/* cyberpunk */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Cyberpunk</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary"
                value={"cyberpunk"}
                onChange={handleThemeChange}
                checked={theme === "cyberpunk"}
              />
            </label>
          </div>

          {/* retro */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Retro</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary"
                value={"retro"}
                onChange={handleThemeChange}
                checked={theme === "retro"}
              />
            </label>
          </div>

          {/* aqua */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Aqua</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary"
                value={"aqua"}
                onChange={handleThemeChange}
                checked={theme === "aqua"}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
