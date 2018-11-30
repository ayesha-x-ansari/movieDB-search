import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../App.css';
import {fetchComments, updateComment} from '../actions/commentActions'; 
import CommentList from '../components/CommentList';


class Comments extends Component { 
  constructor(props) {
    super(props); 
   
    this.state = {
      comments: props.comments,
      isSorted: false
    };
    this.updateComment = this.updateComment.bind(this);
    this.sortByLikes = this.sortByLikes.bind(this);
  }

  updateComment(comment) {
    comment.count = comment.count + 1
    console.log(comment)
    this.props.updateComment(comment);
    this.setState({comments: this.state.comments})

  }

  sortByLikes(comments)
  {
    let newComments = []
    if (this.state.isSorted)  {
      newComments = comments.sort((a,b) => a.count < b.count) 
    }
    else{
      newComments = comments.sort((a,b) => a.count > b.count)  
    }
  
    this.setState({
      isSorted: !this.state.isSorted,
      comments: newComments
    })
    console.log(this.state.comments)

  }
  
    componentWillMount(){
      this.props.fetchComments();    
    } 
    
    render() {
      console.log(this.props.comments)
        return (
          <CommentList
          comments={this.props.comments}
          onIncrement={this.updateComment}
          sortByLikes={this.sortByLikes}
       />
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