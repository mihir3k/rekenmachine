import Button from "./Button";

function ThemeSwitcher() {
  return (
    <div className="ThemeSwitcher" style={{ display: "flex" }}>
      <Button label="Light Theme" type="LIGHT_THEME" small wide />
      <Button label="Dark Theme" type="DARK_THEME" small wide />
    </div>
  );
}

export default ThemeSwitcher;
