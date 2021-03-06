import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link }from 'react-router-dom';
import ReactDOM from 'react-dom';

class CommentList  extends Component {

  constructor(props){
    super(props)
    this.state = {
      comments: this.props.comments,
      isSorted: false
    }
    this.handlClick = this.handleClick.bind(this)    
  }

  handleClick = () => { 
    this.setState({  
      comments: this.props.comments
    })
  } 

 // componentDidMount() {
 //   this.setState({
   //   comments: this.state.comments
  //  })
  //} 
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      comments: nextProps.comments
    })
  }

  sortByLike(e)
  {
    e.preventDefault()
    let newComments = []
  
    if (this.state.isSorted)  {
      newComments = this.state.comments.sort((a,b) => a.count < b.count) 
    }
    else{
      newComments = this.state.comments.sort((a,b) => a.count > b.count)  
      
    }

    this.setState({
      isSorted: !this.state.isSorted,
      comments: newComments
    })
  }


  render ()   { 
  return(
    <div  align="left"  onMouseDown={this.handleClick}>
      <h2> Comments Home Page </h2>
     
      <button onClick={this.sortByLike.bind(this)}> 
            Sort  </button> 
        <ul>
          {this.state.comments.map(comment => 
            
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