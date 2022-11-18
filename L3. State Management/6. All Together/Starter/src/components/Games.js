import React from 'react'
import { useState } from 'react';

const Games = () => {

    const [games, setGames] = useState(0); 

    const numOfGames = () => {
        setGames(0);
      }

  return (
    <div>
      <p games={games}>{numOfGames}</p> 
    </div>
  )
}

export default Games
