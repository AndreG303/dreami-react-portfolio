import React from 'react';
import './css/body.css';
import './css/heading.css';
import './css/styles.css';
import Home from './pages/home';
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/contact"
import {HashRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact={true} path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact={true} path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact={true} path="/contact">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
