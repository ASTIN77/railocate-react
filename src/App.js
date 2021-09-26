import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/TrainSearch/Search";
import Results from "./components/TrainResults/Results";
import Sponser from "./components/Sponser/Sponser";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Search />
      <Results />
      <Sponser />
    </Fragment>
  );
};

export default App;
