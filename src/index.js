import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import CityWeather from './components/CityWeather/CityWeather';

const routing = (
    <Router>
         <ul>
        <li>
          <Link to="/">Random Weather</Link>
        </li>
        <li>
          <Link to="/city-weather">City Weather</Link>
        </li>
     </ul>
      <div>
      <Route exact path="/" component={App} />
      <Route path="/city-weather" component={CityWeather} />
      </div>
    </Router>
  )


  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
