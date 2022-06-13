import React, { useEffect, useState } from 'react'
import useGetCharacter from '../hooks/useGetCharacter'
import axios from 'axios'

const CardCharacter = ({resident}) => {

  const {characters} = useGetCharacter(resident)

  //Definir la clase (Alive / Dead / Unknown)
  let status
  if(characters?.status == "Alive"){
    status = "statusGreen"
  }else if(characters?.status == "Dead"){
    status = "statusRed"
  }else{
    status = "statusGrey"
  }  

  
  return (
    <div className='Card'>        
        <img src={characters?.image} alt="" />

        <div className="CardInfo">
            <p>{characters?.name}</p>
            <p className={status}> {characters?.species} {characters?.status}</p>
            <p className='small'>Origin:</p>
            <p>{characters?.origin?.name}</p>
            <p className='small'>episodes where appear:</p>
            <p>{characters?.episode.length}</p>
        </div>
        
    </div>
  )
}

export default CardCharacter