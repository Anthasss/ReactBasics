import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemePicker() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  return (
    <div className="px-8 py-6 sticky top-0 bg-black bg-opacity-10">
      <h1 className="mb-6 font-bold">Theme Toggles</h1>

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
  );
}
