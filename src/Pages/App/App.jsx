import { Fragment } from 'react';
import {
  AppBar,
  Hero,
  AppFooter,
} from "../../Components";
import './App.css';

const App = () => {
  return (
    <Fragment>
      <AppBar />
      <Hero />
      <AppFooter />
    </Fragment>
  );
}

export default App;
