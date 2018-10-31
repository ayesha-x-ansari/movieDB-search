import React, {Component} from 'react';
import {connect} from 'react-redux';  
import {fetchComment, deleteComment} from '../actions/commentActions'; 
import PropTypes from 'prop-types';

class SingleComment  extends Component{

  constructor(props) {
    super(props);  
    this.state = {
      comment: this.props.comment
    };
  }

  componentWillMount(){
   this.props.fetchComment(this.props.match.params.id);
   console.log(this.props.match.params.id)  
  }

  deleteButtonClick(){
    this.props.deleteComment(this.props.match.params.id)
      .then(() => {
        this.context.router.push('/');
      }); 
  }

  render(){
    if(!this.props.comment){
      return <div> Getting comment, please wait. </div>; 
    }

    return(
      <div align="left" className="col-1">
        <h2> Comment Title: {this.props.comment.title}</h2>
        Comment by: {this.props.comment.commentator} <br/> <br/>
        Comment Text: <br/> 
        {this.props.comment.comment} <br/> <br/>
        <button className="btn btn-warning" onClick={this.deleteButtonClick.bind(this)}>
          Delete Comment
        </button> 
      </div>
    );
  }
}

SingleComment.propTypes = {
  fetchComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object
};

function mapStateToProps(state){
  return { comment: state.comments.comment}; 
}

export default connect(mapStateToProps, {fetchComment,  deleteComment })(SingleComment);

