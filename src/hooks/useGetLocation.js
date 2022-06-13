import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useGetLocation = (Search) => {

  const [locations, setLocations] = useState()
  
  useEffect(() => {
    let locationNumber
    if(Search){
      locationNumber = Search
    }else{
      locationNumber = Math.ceil(Math.random()*126)
    }
    
    axios.get(`https://rickandmortyapi.com/api/location/${locationNumber}`)
        .then(res => setLocations(res.data))
        .catch(err => console.log(err))      
  }, [Search])  

  return {locations}
}

export default useGetLocation