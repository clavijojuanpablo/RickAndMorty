import React, { useState } from 'react'

const InputSearch = ({setSearchLocation}) => {

  const onSubmitFunction = e =>{
    e.preventDefault()
    setSearchLocation(e.target.children[0].value)
  }

  return (
    <form onSubmit={onSubmitFunction} className='formRick'>
        <input type="number" className='Input' placeholder='Input a location (1 - 126)' min="0" max="126"/>
        <button>Search</button>
    </form>
    
  )
}

export default InputSearch