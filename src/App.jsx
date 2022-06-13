import { useState } from 'react'
import React from 'react'
import './App.css'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useGetLocation from './hooks/useGetLocation'
import Banner from "./assets/banner.png"


function App() {

  const [Search, setSearchLocation] = useState()

  const {locations} = useGetLocation(Search)

  return (
    <>
    <div className="Banner">
      <img src={Banner} alt="Rick And Morty" id='Banner'/>
    </div>

    <div className="App">      

      <h1 className='Title'>Rick <span>and</span> Morty</h1>
      <h2 className='Subtitle'>Wiki</h2>

      <InputSearch setSearchLocation={setSearchLocation}/>

      <LocationInfo locations={locations}/>        

        <div className="Cards">
          {
            locations?.residents?.map(resident => (
              <CardCharacter resident = {resident} key = {resident}/>
            ))
          }
        </div>

    </div>
    </>
    
  )
}

export default App
