import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from "./components/common/Header";
import PageNotFound from './components/PageNotFound';
import CoursesPage from './components/courses/CoursesPage';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} /> 
      </Switch>
    </div>
  )
}

export default App;
