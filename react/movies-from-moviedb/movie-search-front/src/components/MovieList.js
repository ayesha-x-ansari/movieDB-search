import React from 'react';
import PropTypes from 'prop-types';

const MovieList = ({movies}) => {

  
return(     
  
   <div> 
     <h1> Movies List </h1>  
     {movies.map(movie => 
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
     )}
   </div>
)

 }  

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};


export default MovieList;
