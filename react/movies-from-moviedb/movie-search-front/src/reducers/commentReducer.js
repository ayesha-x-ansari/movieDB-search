import {ADD_COMMENT, FETCH_COMMENTS, FETCH_COMMENT, DELETE_COMMENT, UPDATE_COMMENT} from '../actions/types';

const initialState = {all: [], comment: null};

export default function(state = initialState, action) {
  switch(action.type){
    case ADD_COMMENT:
      console.log(action.payload)
        return { ...state, all: [...state.all, action.payload]}

    case FETCH_COMMENTS:
       console.log(action.payload)
      return { ...state, all: action.payload} ;
    
    case FETCH_COMMENT:
       console.log(action.payload)
      return { ...state, comment: action.payload} ; 

    case DELETE_COMMENT:
     return {...state, comments: state.comments.filter(comment => comment.id !== action.payload.comment.id)};

     case UPDATE_COMMENT:
       console.log(action.payload)
      return { ...state, comment: action.payload} ; 

    default:
      return state;
  }
}