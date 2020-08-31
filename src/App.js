import React, { useContext } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar.component";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.component";
import { ThemeContext } from "./Context/theme.context";
import Footer from "./components/Footer/Footer.component";
import Project from "./components/Project/Project.component";
import Certificate from "./components/Certificate/Certificate.component";
import About from "./components/About/About.component";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "light" ? " light-theme" : "dark-theme"}`}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/certificate" component={Certificate} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
