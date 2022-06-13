import React, { useState } from 'react'

const InputSearch = ({setSearchLocation}) => {

  const onSubmitFunction = e =>{
    e.preventDefault()
    setSearchLocation(e.target.children[0].value)
  }

  return (
    <form onSubmit={onSubmitFunction} className='formRick'>
        <input type="text" className='Input' placeholder='Input a location' />
        
    </form>
    
  )
}

export default InputSearch