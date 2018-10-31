import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar'
import Movie from './components/Movie';
import Form from './components/CommentForm';
import Comments from './components/Comments';
import SingleComment from './components/SingleComment';

class App extends Component {
 render() {
    return (
      <Router >
       <div className="App">
          <Navbar/>
          <Route exact path="/" component={Movie}/>
          <Route exact path="/new" component={Form}/>
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/comment/:id" component={SingleComment}/>
        </div>

      </Router>
    );
  }
}

export default App



