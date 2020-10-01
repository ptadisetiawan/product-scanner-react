import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ScannerScreen from './ui/screens/scanner_screen';
import Home from './ui/screens/home_screen';
import ResultScreen from './ui/screens/result_screen';

const App = () => (
  <Router>
  {/* <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/scanner">Scanner</Link>
      </li>
    </ul>

    <hr /> */}

    {/*
      A <Switch> looks through all its children <Route>
      elements and renders the first one whose path
      matches the current URL. Use a <Switch> any time
      you have multiple routes, but you want only one
      of them to render at a time
    */}
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/scanner">
        <ScannerScreen />
      </Route>
      <Route path="/result/:kode" children={<ResultScreen />} />
    </Switch>
  {/* </div> */}
</Router>
);

export default App;
