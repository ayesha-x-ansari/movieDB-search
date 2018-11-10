import React from 'react';
import PropTypes from 'prop-types';
import {Link }from 'react-router-dom';

class CommentList  extends React.Component {

  
render ()   { 
  
  return(
    <div  align="left" >
      <h2> Comments Home Page </h2>
        <ul>
          {this.props.comments.map(comment => 
          
            <li key={comment.id}>
              <pre>
              Comment by:      <strong>{comment.commentator}</strong>   <br/> 
              Count:           <strong>{comment.count}  <button onClick={() => this.props.onIncrement(comment)}> ⬆️ </button> </strong>
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