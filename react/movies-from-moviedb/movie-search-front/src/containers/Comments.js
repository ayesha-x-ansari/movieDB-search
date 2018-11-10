import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link }from 'react-router-dom';
import '../App.css';
import {fetchComments, updateComment} from '../actions/commentActions'; 
import CommentList from '../components/CommentList';


class Comments extends Component { 
  constructor(props) {
    super(props);  
    this.state = {
      comments: this.props.comments
    };
    this.updateComment = this.updateComment.bind(this);
  }

  updateComment(comment) {
    comment.count = comment.count + 1
    console.log(comment)
    this.props.updateComment(comment);
    this.setState({comments: this.state.comments})

  }

    componentWillMount(){
      this.props.fetchComments();    
    } 
    
    render() {
        return (
          <CommentList
          comments={this.props.comments}
          onIncrement={this.updateComment}
       />
     //<div>  ffff</div>
        )
      }
  }

  Comments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    updateComment: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired
  };
  
  function mapStateToProps(state){
    return{comments: state.comments.all } 
  }
  
  export default connect(mapStateToProps, {fetchComments, updateComment})(Comments);