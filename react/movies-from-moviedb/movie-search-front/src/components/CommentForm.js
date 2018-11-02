import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../actions/commentActions";


const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      commentator: "",
      comment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title, commentator, comment } = this.state;
    this.props.addComment({ title, commentator, comment });
    this.setState({ title: "", commentator: "" , comment: ""  });
    this.props.history.push('/comments')
    
  }


  render() {
    const { title, commentator, comment } = this.state;
    return (
       
      <form onSubmit={this.handleSubmit}>
        <h1>  Add a comment </h1>
        <br/>
        <div display="block">
          <label htmlFor="title">Title</label> <br/>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <br/>

         <label htmlFor="Commentator">Commentator</label> <br/>
          <input
            type="text"
            className="form-control"
            id="commentator"
            value={commentator}
            onChange={this.handleChange}
          />
          <br/>

          <label htmlFor="Comment">Comment</label> <br/>
          <input
            type="text"
            className="form-control"
            id="comment"
            value={comment}
            onChange={this.handleChange}
          />
         <br/><br/>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
        </div>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;