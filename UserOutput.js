import React from 'react'


// function to create the UserInput component

export const UserOutput = (props) => {
  return (
    <div className=' p-5 font-serif'>
      <p>My name is {props.username} and I am an afro-pop musician</p>
    </div>
  )
}
