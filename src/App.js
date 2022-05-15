import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Hero from './components/Hero';
import { Fragment, useEffect } from 'react';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={
            <Fragment>
              < Header />
              < Hero />
            </Fragment>
          }
        />

        <Route path='/channels'
          element={
            <Fragment>
              <Home />
            </Fragment>
          }
        />

        <Route path='/channels/:id'
          element={
            <Fragment>
              <Home />
            </Fragment>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
