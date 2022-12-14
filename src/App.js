import './App.css';
import {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './Components/display';
import Form from './Components/form';
import Navar from './Components/Nav';
import About from './Pages/about';
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
        
        {/* <Form weatherSearch = {getWeather}/> */}
        <Routes>

          <Route path = '/' element = {
            <Display weather={weather} weatherSearch = {getWeather}/>
          }>

          </Route>
          <Route path="/about" element={
            <About />
          }></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
