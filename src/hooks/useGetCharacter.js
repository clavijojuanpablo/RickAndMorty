import { useEffect, useState } from "react"
import axios from 'axios'

const useGetCharacter = (resident) => {

    const [characters, setCharacters] = useState()

    useEffect(() => {    
        axios.get(resident)
          .then(res => setCharacters(res.data))
          .catch(err => console.log(err))    
    }, []) 

    
  return {characters}
}

export default useGetCharacter