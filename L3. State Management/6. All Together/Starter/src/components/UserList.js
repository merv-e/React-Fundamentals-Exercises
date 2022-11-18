import React from 'react'

const UserList = ({userName, value, numOfGames}) => {

  //  console.log(value); 
  const userNameValidation = (userName) => {
    if(userName.includes(value)){
      prompt("Username exists. Please use another username.")
  };

} ;

  // userName.filter(user => !value.includes(userName)) 

  return (
    <ol>
    {console.log(userName)}
    {(userNameValidation &&
      userName.map((user, games) => {
       return (
        <li key={user}>
        <p>{user} has played {games} games.</p>
        </li>
        )
      })
    )}
    </ol>
  )
}

export default UserList
