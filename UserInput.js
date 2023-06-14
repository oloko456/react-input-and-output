import React from 'react'

// function to create the UserInput component

export const UserInput = (props) => {
  return (
    <div>
      <input type='text' onChange={props.change} className=' outline-none rounded-lg pl-2 h-8'/>
    </div>
  )
}
