import './app.css'
import {useEffect, useState} from 'react';
import Hero from './Hero';
import {Switch, Route, useLocation} from 'react-router-dom'
import Details from './Details'
import { AnimatePresence } from 'framer-motion';
import Camera from './Camera';
import Camera2 from './Camera2';
import Display from './Display';

function App() {
  const location = useLocation()

  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>

          <Route exact path='/'>
            <Hero />
          </Route>

          <Route exact path='/details'>
            <Details />
          </Route>

          <Route exact path='/camera'>
            <Camera />
          </Route>

          <Route exact path='/camera2'>
            <Camera2 />
          </Route>

          <Route exact path='/display'>
            <Display />
          </Route>

        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
