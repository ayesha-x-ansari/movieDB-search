import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../App.css';
import Navbar from './layout/Navbar'
import Movie from '../containers/Movie';
import Form from './CommentForm';
import Comments from '../containers/Comments';
import SingleComment from '../containers/SingleComment';

const App = props => {
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

export default App



