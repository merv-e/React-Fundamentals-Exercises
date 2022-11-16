import React from 'react'

function Users({profiles, users, movies}) {
  return (
    <div>
       <ol>
    {profiles.map((profile) => {
        const favMovies = movies[profile.favoriteMovieID].name;
        const userNames = users[profile.userID].name;
        return (
        <li>{userNames}</li>
        )
    })}
      </ol>
    </div>
  )
}

export default Users
