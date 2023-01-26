import React from "react";

const ThemeSwitcher = ({ themeSwitcher, setThemeSwitcher }) => {
  // func handle change the themes
  const handleClick = (el) => {
    setThemeSwitcher(() => el.target.id);
  };

  // click on theme-one when the component is mounted as a default theme
  React.useEffect(() => {
    document.getElementById("theme-one").click();
  }, []);

  // when the theme change change the body background color
  React.useEffect(() => {
    const body = document.querySelector("body");
    switch (themeSwitcher) {
      case "theme-one":
        body.style.backgroundColor = "#3a4764";
        break;
      case "theme-two":
        body.style.backgroundColor = "hsl(0, 0%, 90%)";
        break;
      case "theme-three":
        body.style.backgroundColor = "hsl(268, 75%, 9%)";
        break;
      default:
        body.style.backgroundColor = "#3a4764";
        break;
    }
  }, [themeSwitcher]);
  
  return (
    <header>
      <h1>calc</h1>
      <nav>
        <label>THEME</label>
        <ul>
          <li id="theme-one" onClick={handleClick}></li>
          <li id="theme-two" onClick={handleClick}></li>
          <li id="theme-three" onClick={handleClick}></li>
        </ul>
      </nav>
    </header>
  );
};

export default ThemeSwitcher;
