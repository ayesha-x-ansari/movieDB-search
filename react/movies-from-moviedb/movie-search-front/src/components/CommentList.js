import React from 'react';
import PropTypes from 'prop-types';
import {Link }from 'react-router-dom';

const CommentList = ({comments}) => {
    
  return(
    <div  align="left">
      <h2> Comments Home Page </h2>
      <ul>
      { comments.map(comment => 
          <li key={comment.id}>
          Comment by: {comment.commentator}  <br/>
          <Link to={"comment/" + comment.id}>
            {comment.title}  <br/> 
          </Link>   
          </li> ) }
        </ul>
    </div> 
  )           
 }  

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
