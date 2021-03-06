import React from 'react';
import { Route, Switch, } from 'react-router-dom';

import Home from './components/home/home'
import Header from './components/header/header'
import CreateDictionary from './components/create-dictionary/create-dictionary'
import EditDictionary from './components/edit-dictionary/edit-dictionary'

import './app.scss'

const App = () => {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreateDictionary} />
        <Route exact path="/edit/:id" component={EditDictionary} />
      </Switch>
    </div>
  );
}

export default App;
