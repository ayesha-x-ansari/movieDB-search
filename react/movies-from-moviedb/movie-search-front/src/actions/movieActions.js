import { FETCH_MOVIES } from './types';

export const fetchMovies = (searchTerm) => dispatch => {

  const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    
  fetch(urlString)
    .then(res => res.json())
    .then(movies =>
      dispatch({
        type: FETCH_MOVIES,
        payload: movies.results
      })
    );
};
