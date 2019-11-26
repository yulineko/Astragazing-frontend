import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PostsContainer from './containers/PostsContainer'
import WeathterContainer from './containers/WeatherContainer'
import LightPollution from './containers/LightPollution'
import Menu from './components/Menu'
import Home from './containers/Home'
import ISS from './containers/ISS'
import SolarSystem from './containers/SolarSystem'
import './App.css';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/blog" component = {PostsContainer}/>
          <Route exact path = "/weather" component = {WeathterContainer}/>
          <Route exact path = "/lightpollution" component = {LightPollution}/>
          <Route exact path = "/solarsystem" component = {SolarSystem}/>
          <Route exact path = "/iss" component = {ISS}/>
        </Switch>
      </div>
    );
  }
}

export default App;
