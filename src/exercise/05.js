// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const boxStyle = {
  border: '1px solid #333',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
}
const smallBox = (
  <div
    className="box--small"
    style={{...boxStyle, fontStyle: 'italic', background: 'lightblue'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box--medium"
    style={{...boxStyle, fontStyle: 'italic', background: 'pink'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    size="large"
    className="box--large"
    style={{...boxStyle, fontStyle: 'italic', background: 'orange'}}
  >
    large orange box
  </div>
)
const Box = ({size, style, background, children}) => {
  return (
    <div
      className={`box--${size}`}
      background={background}
      style={{...style, background: background}}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      {/* {smallBox} */}
      <Box size="small" background="lightblue" style={boxStyle}>
        small lightblue box
      </Box>
      <Box size="medium" background="pink" style={boxStyle}>
        small lightblue box
      </Box>
      <Box size="large" background="orange" style={boxStyle}>
        small lightblue box
      </Box>
      {/* {mediumBox}
      {largeBox} */}
    </div>
  )
}

export default App
