import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Register from './components/Register';
import React, {Component, component} from 'react'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        {/* <HomePage /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
