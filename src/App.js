import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/body.css';
import Home from './pages/home';
import Portfolio from "./pages/portfolio"
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
