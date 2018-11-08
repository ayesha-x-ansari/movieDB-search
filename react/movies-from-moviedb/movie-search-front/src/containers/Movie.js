import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import '../App.css';
import { fetchMovies } from '../actions/movieActions'; 

class Movie extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        searchTerm: "Batman"
      };

      this.onSearchChange = this.onSearchChange.bind(this);
      this.onSearchSubmit = this.onSearchSubmit.bind(this);
    
    }
    
  componentWillMount() {
    this.props.fetchMovies("batman");
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    if (!this.state.searchTerm) return
    this.props.fetchMovies(this.state.searchTerm);
    this.setState({ searchTerm: '' });
    event.preventDefault();
  }
  render() {  
  return (
    <div>
      <SearchForm   value={this.state.searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}/>
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
