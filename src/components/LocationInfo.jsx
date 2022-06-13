import React, { useState } from 'react'

const LocationInfo = ({locations}) => {

  return (
    <div className='Location'>
        
        <h1>{locations?.name}</h1>

        <div className="InfoLocation"> 
            <div className='InfoIndividual'>
              <p>Type:</p>
              <span>{locations?.type}</span>
            </div>

            <div className='InfoIndividual'>
              <p>Dimension:</p>
              <span>{locations?.dimension}</span>
            </div>

            <div className='InfoIndividual'>
              <p>Populations:</p>
              <span>{locations?.residents?.length}</span>
            </div>
            
        </div>
    </div>
  )
}

export default LocationInfo