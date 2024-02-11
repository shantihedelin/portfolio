import { useTheme } from "./ThemeContext";

function Theme_Toggler() {
  const { state, dispatch } = useTheme();

  function toggleTheme() {
    dispatch({
      type: "TOGGLE_THEME",
      theme: state.theme === "light" ? "dark" : "light",
    });
  }

  return (
    <div>
      <button onClick={toggleTheme}> Toggle Theme</button>
    </div>
  );
}
export default Theme_Toggler;
