import React, { useState } from 'react'
import Form from './Form'

const ChatWindow = () => {
 
const [messages, setMessages] = useState([]); 

const users = [
  { 
   userName: "Amy",
   text: messages  
  }, 
  {
   userName: "John",
   text: messages  
  }
];


const [newMessages, setNewMessages] = useState("");


const handleInput = (ev) => {
  setNewMessages(ev.target.value);
  onMessages();
}; 


const onMessages = (messages) => {
  setMessages([...messages, newMessages]);
};


  const sendMessage = (e) => {
    e.preventDefault();
    handleInput(e);
    setNewMessages("");
  };

  const isDisabled = () => {
    return false;
  };

  return (
    <>
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>

          <div className="name sender">{users.userName}</div>
          <ul className="message-list">
            {messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.userName === users[0].userName
                    ? "message sender"
                    : "message recipient"
                }
              >
                <p>{`${message.userName}: ${message.text}`}</p>
              </li>
            ))}
          </ul>
         <Form isDisabled={isDisabled} sendMessage={sendMessage} newMessages={newMessages}
         messages= {messages} />
        </div>

        <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{users[1].userName}</div>
        <ul className="message-list">
          {messages.map((message, index) => (
            <li
              key={index}
              className={
                message.userName === users[1].userName
                  ? "message sender"
                  : "message recipient"
              }
            >
              <p>{`${message.userName}: ${message.text}`}</p>
            </li>
          ))}
        </ul>
        {/* <EnterMessageJohn isDisabled={isDisabled} /> */}
      <Form isDisabled={isDisabled} sendMessage={sendMessage} newMessages={newMessages} />
      </div>
      </>
  )
}

export default ChatWindow
