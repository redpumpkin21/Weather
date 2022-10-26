import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import Display from './Components.js/display';
import Form from './Components.js/form';

function App() {
  const [weather, setWeather] = useState({})
  let apiKey = '11786cf53362e428a0695f06c5ece387'
  const getWeather = async(zipCode) =>{   
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`)
    const data = await response.json()
    setWeather(data)
  }

  useEffect (() => {getWeather()}, [])

  return (
    <div className="App">
      <header className="App-header">
        <Display weather={weather}/>
        <Form weatherSearch = {getWeather}/>
      </header>
    </div>
  );
}

export default App;
