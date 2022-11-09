import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './Components.js/display';
import Form from './Components.js/form';
import Navar from './Components.js/Nav';
function App() {
  const [weather, setWeather] = useState({})
  let apiKey = '11786cf53362e428a0695f06c5ece387'
  const getWeather = async(zipCode) =>{   
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`)
    const data = await response.json()
    setWeather(data)
  }

  useEffect (() => {getWeather()}, [])

  return (
    <div className="App">
      <header className="App-header">
        <Navar />
        <Display weather={weather}/>
        <Form weatherSearch = {getWeather}/>
      </header>
    </div>
  );
}

export default App;
