import { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Search from './components/TrainSearch/Search';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Search />

    </Fragment>
  );
}

export default App;
