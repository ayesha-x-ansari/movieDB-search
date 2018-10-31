import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import commentReducer from './commentReducer';


//export default combineReducers({
//  movies: movieReducer,
//  comments: commentReducer
//})





//import {combineReducers} from 'redux';
//import saves from './savesReducer';
//import topStories from './topStoriesReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  comments: commentReducer
})

export default rootReducer;

