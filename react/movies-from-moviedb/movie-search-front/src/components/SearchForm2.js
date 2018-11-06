import React, { Component } from 'react';
import { fetchMovies } from '../actions/movieActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SearchForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.searchTerm) return

    this.props.fetchMovies(this.state.searchTerm)
  }

  render() {
    return (


       <form onSubmit={this.handleSubmit}>
        <input style={{
          type: 'text',
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.handleChange.bind(this)} placeholder="Enter search term"/>
        <button className="btn=btn-search">Search</button>

        </form>
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
