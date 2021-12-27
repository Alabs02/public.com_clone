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
      <div className='absolute top-0 left-0 w-100'>
        <AppBar />
      </div>
      <Hero />
      <AppFooter />
    </Fragment>
  );
}

export default App;
