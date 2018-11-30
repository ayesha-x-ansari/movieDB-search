import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link }from 'react-router-dom';
import { connect } from 'react-redux';
import {Comments} from '../containers/Comments';


class CommentList  extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments: this.props.comments,
      isSorted: false
    }
  }

  render ()   { 
  
  return(
    <div  align="left">
      <h2> Comments Home Page </h2>
      <button onClick={() => this.props.sortByLikes(this.props.comments)}> 
            Sort  </button> 
        <ul>
          {this.props.comments.map(comment => 
            
            <li key={comment.id}>
              <pre>
              Comment by:      <strong>{comment.commentator}</strong>   <br/> 
              Count:           <strong>{comment.count}  <button onClick={() => this.props.onIncrement(comment)}> <span> ⬆️
              </span>   </button> </strong>
              <br/>
              Comment Title:  <strong> <Link to={"comment/" + comment.id}>
                {comment.title}   
              </Link>  </strong>
              </pre>  
            </li> ) }
          
        </ul>
    </div> 
  )           
} 
   
} 

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;