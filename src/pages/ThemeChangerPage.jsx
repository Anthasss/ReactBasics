import ThemePicker from "../components/ThemeChanger/ThemePicker";
import ComponentsShow from "../components/ThemeChanger/ComponentsShow";

export default function ThemeChangerPage() {
  return (
    <div className="flex grow">
      <div className="w-full grid grid-cols-[1fr,auto]">
        {/* contents */}
        <ComponentsShow />

        {/* theme toggles */}
        <ThemePicker />
      </div>
    </div>
  );
}
