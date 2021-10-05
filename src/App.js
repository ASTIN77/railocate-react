import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/TrainSearch/Search";
import Sponser from "./components/Sponser/Sponser";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Search />
      <Sponser />
    </Fragment>
  );
};

export default App;
