import React, { useState } from 'react'

const Users = ({userName, handleUserNameChange}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    const handleForm = (event) => {
        event.preventDefault();
    };

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }; 
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }; 


    const noInput = () => firstName.length === 0 || lastName.length === 0 || userName.length === 0;

  return (
    <div>
        <form onSubmit={handleForm}>
            <input type="text" placeholder='First Name' value={firstName} onChange={handleChangeFirstName}  />
            <input type="text" placeholder='Last Name' value={lastName} onChange={handleChangeLastName} />
            <input type="text" placeholder='User Name' value={userName} onChange={handleUserNameChange} />
            <button disabled={noInput()} >Add</button> 
            <p>{userName}</p>
        </form>
    </div>
  )
}

export default Users
