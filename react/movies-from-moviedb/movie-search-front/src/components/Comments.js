import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link }from 'react-router-dom';
import '../App.css';
import {fetchComments} from '../actions/commentActions'; 


class Comments extends Component{

  constructor(props) {
    super(props);  
    this.state = {
      comments: this.props.comments
     
    };
  }

    componentWillMount(){
      this.props.fetchComments();    
    } 
  
    renderComments(){
      return this.props.comments.map((comment) => {
       return (
         <li key={comment.id}>
           Comment by: {comment.commentator}  <br/>
           <Link to={"comment/" + comment.id}>
             {comment.title}  <br/> 
          </Link>   
         </li>  
        )
       });
    }
    render(){
      return(
        <div  align="left">
        <h2> Comments Home Page </h2>
        <ul>
            {this.renderComments()}
        </ul>
        </div>
      );
    }
  }

  Comments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired
  };
  
  function mapStateToProps(state){
    return{comments: state.comments.all } 
  }
  
  export default connect(mapStateToProps, {fetchComments })(Comments);
