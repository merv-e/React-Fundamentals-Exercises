import React, { useState } from 'react'
import Games from './Games';
import UserList from './UserList';

const Users = ({userName, onAddUserName, games, numOfGames}) => {

    const [firstName, setFirstName] = useState("");
    
    const [lastName, setLastName] = useState("");

    const [value, setValue] = useState("");

    const addUser = (e) => {
        setValue(e.target.value);
    };

    const handleForm = (ev) => {
        ev.preventDefault();
        onAddUserName(value);
        setValue("");
    };
    

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
        // setFirstName("");
    }; 

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
        // setLastName("");
    }; 

    const noInput = () => firstName.length === 0 || lastName.length === 0 || value.length === 0;

  return (
    <div>
        <form onSubmit={handleForm}>
            <input 
            type="text"
            placeholder='First Name' 
            value={firstName} 
            onChange={handleChangeFirstName}/>
            <input 
            type="text" 
            placeholder='Last Name' 
            value={lastName} 
            onChange={handleChangeLastName} />
            <input 
            type="text" 
            placeholder='User Name' 
            value={value} 
            onChange={addUser} />

            <button disabled={noInput()} >Add</button>

        </form>
        <UserList games={games} value={value}  userName={userName} numOfGames={() => numOfGames()} />
        <Games />
    </div>
  )
}

export default Users
