import React, { Component } from 'react';
import { fetchMovies } from '../actions/movieActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class SearchForm extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.props.fetchMovies(searchTerm)
  }

  render() {
    return (
      
        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
    )}
}


SearchForm.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.items,
});

export default connect(mapStateToProps, { fetchMovies })(SearchForm);