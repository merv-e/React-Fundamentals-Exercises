import React from 'react'
import EnterMessageAmy from './EnterMessageAmy'

const AmyChatWindow = ({users, messages, isDisabled}) => {
  return (
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>

          <div className="name sender">{users[0].username}</div>
          <ul className="message-list">
            {messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === users[0].username
                    ? "message sender"
                    : "message recipient"
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>
          <EnterMessageAmy isDisabled={isDisabled} />
        </div>
  )
}

export default AmyChatWindow
