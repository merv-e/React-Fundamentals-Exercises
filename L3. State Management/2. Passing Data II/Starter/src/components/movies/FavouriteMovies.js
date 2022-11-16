import React from 'react'

const FavouriteMovies = ({profiles, movies}) => {
    let movieList = [];
  
    const mapped = profiles.map((pro) => {    
      const favMov = movies[pro.favoriteMovieID].name;
        return `${favMov}`
    });
    
     mapped.filter((elem) =>  {
      if(!movieList.includes(elem)){
        movieList.push(elem);
      } 
      return movieList;
    })

    return (
    <div>
       <ol>
      {
        movieList.map((movie, index) => { 
        return (
          <li key={movie.index}>
            <p key={index}>{movie}</p>
          </li>
        )
        })
      }
      </ol>
    </div>
  )
}

export default FavouriteMovies
