import { FETCH_MOVIES } from '../actions/types';

const initialState = {
  items: []

  //comma removed after []  it was like [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
    //console.log (action.payload)
      return {
        ...state,
        items: action.payload
      };
  //  case NEW_POST:
   //   return {
   //     ...state,
   //     item: action.payload
    //  };
    default:
      return state;
  }
}