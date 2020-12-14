import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './sections/navbar';
import Home from './sections/home';
import Quizz from './sections/quizzpage';
const App = ()=>{
  return(
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/quizzes/:id">
          <Quizz/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
