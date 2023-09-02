import React from 'react'

function Heading(props) {
  return (
    <div><h2 style={{fontSize:props.size, fontWeight:"bold"}}>{props.head}</h2></div>
  )
}

export default Heading