const Display = ({weather}) => {
    
    const loaded = () => {
        return(

            <div>
                <div >
                    <p className="name">{weather.name}</p>
                </div>
                
                <div className="temp">
                    <h1>{weather.main.temp}</h1>
                </div>
                
                <p className="descr">{weather.weather[0].description}</p>
    
            </div>
               
        )}    
    const loading = () => {
        return <h1>Put in your Zip code to learn more</h1>
    }
        return weather.weather ? loaded() : loading()
 }

 export default Display