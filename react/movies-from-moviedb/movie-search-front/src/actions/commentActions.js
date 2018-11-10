import {ADD_COMMENT, FETCH_COMMENTS, FETCH_COMMENT, DELETE_COMMENT, UPDATE_COMMENT} from './types'; 
//import SavesApi from '../api/SavesApi';
import CommentsApi from '../api/CommentsApi';

//  Add a comment
export function addComment(comment) {
  console.log('C')
  return (dispatch) => {
    CommentsApi.addComment(comment).then((responseComment) => {
        //console.log(`COMMENT ADDED...${responseComment.id}`)
        console.log('D')
        dispatch({type: ADD_COMMENT, payload: responseComment});
    }).catch((error) => {
      throw(error);
    });
  };  
  console.log('E')
}


//  Fetch all comments 
export function fetchComments() {
  return (dispatch) => {
    CommentsApi.fetchComments().then((comments) => {
      console.log( "FETCHED COMMENTS....")
      dispatch({type: FETCH_COMMENTS, payload: comments});
    }).catch((error) => {
      throw(error);
    });
  };
}


//  Fetch a comment based on comment id
export function fetchComment(id) {  
  return (dispatch) => {
    CommentsApi.fetchComment(id).then((comment) => {
      console.log( "FETCHED COMMENT....")
      dispatch({type: FETCH_COMMENT, payload: comment});
    }).catch((error) => {
      throw(error);
    });
  };
}


//  Delete comment based on the comment id
export function deleteComment(id) {
  return (dispatch) => {
    CommentsApi.deleteComment(id).then((comment) => {
        console.log(`DELETED...`)
        dispatch({type: DELETE_COMMENT, payload: comment});
      return;
    }).catch(error => {
      throw(error);
    });
  };
}

//  Delete comment based on the comment id
export function updateComment(id) {
  return (dispatch) => {
    CommentsApi.updateComment(id).then((comment) => {
        console.log(`UPDATE...`)
        dispatch({type: UPDATE_COMMENT, payload: comment});
      return;
    }).catch(error => {
      throw(error);
    });
  };
}


