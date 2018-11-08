import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link }from 'react-router-dom';
import '../App.css';
import {fetchComments} from '../actions/commentActions'; 
import CommentList from './CommentList';


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
    
    render() {
        return (
          <CommentList
          comments={this.props.comments}
        />
        )
      }
  }

  Comments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired
  };
  
  function mapStateToProps(state){
    return{comments: state.comments.all } 
  }
  
  export default connect(mapStateToProps, {fetchComments })(Comments);w