import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './views/home/Home';
import Movie from './views/movie/movie';
import Page404 from './views/404page/PageNotFound';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/movie/:id" component={Movie}/>
        <Route path="/" component={Home} exact />
        <Route path="*" component={Page404} />
      </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;