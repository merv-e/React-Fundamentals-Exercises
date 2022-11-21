import React  from 'react'

const Form = ({isDisabled, sendMessage, newMessages, messages}) => {
  return (
    <div>
      {console.log(newMessages)}
      <form className="input-group" onSubmit={sendMessage}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={messages}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={isDisabled()} >
            SEND
          </button>
        </div>
      </form>
    </div>
  )
}



export default Form
