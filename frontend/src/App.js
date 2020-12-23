import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './sections/navbar';
import Home from './sections/home';
import Quizz from './sections/quizzpage';
import SignIn from './sections/signin';
import SignUp from './sections/signup';
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
        <Route path="/signin">
          <SignIn/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
