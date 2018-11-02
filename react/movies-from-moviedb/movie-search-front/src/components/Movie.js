import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import MovieList from './MovieList';
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
  return (
    <div>
      <SearchForm/>
      <MovieList
          movies={this.props.movies} />  
    </div>
  )}       
}

Movie.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies.items
}); 

export default connect(mapStateToProps, { fetchMovies })(Movie);
