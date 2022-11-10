import Form from "./form"

const Display = ({weather, weatherSearch}) => {
    
    const loaded = () => {
        return(

            <div className="display">
                <div>
                    <p className="name">{weather.name}</p>
                </div>
                
                <div className="temp">
                    <h1>{weather.main.temp}</h1>
                </div>
                
                <p className="descr">{weather.weather[0].description}</p>
            </div>
               
        )}    
    const loading = () => {
        return <div>
            <h3>Enter your Zip Code below to find out 
            your weather for today!</h3>
            <Form weatherSearch={weatherSearch}/>
            </div>
    }
        return weather.weather ? loaded() : loading()
 }

 export default Display