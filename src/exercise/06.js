// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const [error, setError] = React.useState(null)
  const [input, setInput] = React.useState('')

  const nameRef = React.useRef(null)
  const handleSubmit = e => {
    e.preventDefault()
    alert(nameRef.current.value)
  }

  const handleChange = e => {
    setInput(nameRef.current.value.toLowerCase())
    // nameRef.current.value === nameRef.current.value.toLowerCase()
    //   ? setError(null)
    //   : setError('the name should be in lowecase')
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Username:</label>
        <input
          value={input}
          onChange={handleChange}
          ref={nameRef}
          type="text"
        />
        {error && (
          <div
            style={{background: 'red', padding: '1rem', color: 'white'}}
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
      <button type="submit" disabled={error ? true : false}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
