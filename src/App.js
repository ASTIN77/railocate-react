import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/TrainSearch/Search";
import Results from "./components/TrainResults/Results";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Search />
      <Results />
    </Fragment>
  );
};

export default App;
