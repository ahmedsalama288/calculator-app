import React from "react";
import "../styles/main.css";
import ThemeSwitcher from "./ThemeSwitcher";
import CalculatorScreen from "./CalculatorScreen";
import CalculatorButtons from "./CalculatorButtons";

const App = () => {
  // Create State To Save The Theme
  let [themeSwitcher, setThemeSwitcher] = React.useState("theme-one");

  // create State to save the user Inputs
  let [userInputs, setUserInputs] = React.useState("");

  return (
    <main className={themeSwitcher}>
      <ThemeSwitcher
        themeSwitcher={themeSwitcher}
        setThemeSwitcher={setThemeSwitcher}
      />
      <CalculatorScreen userInputs={userInputs}/>
      <CalculatorButtons userInputs={userInputs} setUserInputs={setUserInputs}/>
    </main>
  );
};

export default App;
