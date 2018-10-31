import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Movie from './components/Movie';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Movie} /> 
   
  </Route>
); 
