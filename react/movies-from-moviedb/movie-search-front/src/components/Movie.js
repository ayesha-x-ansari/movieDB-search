import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import '../App.css';
import { fetchMovies } from '../actions/movieActions'; 

class Movie extends Component {
    constructor(props) {
      super(props);  
    }
    
  componentWillMount() {
    this.props.fetchMovies("batman");
  }

  render() {    
    const movieItems = this.props.movies.map(movie => (
      <div key={movie.id}>
        <table key={movie.id}>
          <tbody>
            <tr className="shadow" >
               <td> 
                 <img alt="poster" width="200" src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}/>
               </td>
               <td align="left" width="900px" className="padding-left">
                 <h3>{movie.title}</h3>
                 <p>{movie.overview}</p>
                 <p>Release Date:   {movie.release_date}</p>
                 <a href={'https://www.themoviedb.org/movie/' + movie.id} target="_blank" className="link">
                 <input type="button"  value="View Detail" />  </a>
                 <p></p>
               </td>
            </tr>
          </tbody>
        </table>  
      </div>
    ));

    return (
      <div>
        <SearchForm/>
        <h1>Movies</h1>
        {movieItems}
      </div>
    );
  }
}

Movie.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies.items
}); 

export default connect(mapStateToProps, { fetchMovies })(Movie);
