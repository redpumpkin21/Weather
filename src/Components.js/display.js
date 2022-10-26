const Display = ({weather}) => {
    
    const loaded = () => {
        return(

            <div>
                <p>{weather.name}</p>
                <h1 className="temp">{weather.temp}</h1>
                <p>{weather.weather[0].description}</p>
    
            </div>
               
        )}    
    const loading = () => {
        return <h1>Put in your Zip code to learn more</h1>
    }
        return weather.weather ? loaded() : loading()
 }

 export default Display