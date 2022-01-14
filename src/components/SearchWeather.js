import React, {useState, useEffect} from 'react'
import '../searchWeather.css';
function SearchWeather() {
    const [lat, setlat] = useState(null);
    const [lon, setlon] = useState(null)
        
   useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
      }
             
      function showPosition(position) {
        setlon(position.coords.longitude) 
        setlat(position.coords.latitude)
       
      }
       
    }
    getLocation();
    
    
   }, [])
  
    useEffect(() => {       
        
      const fetchApi=async ()=>{
const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=860417d76e4ab27e5185b3c8313ab080`
const response = await fetch(url);
const res = await response.json();
  
        console.log(res);      
      }
      if(lat!=null)
        fetchApi();
    }, [lat])
    return (
        <div className='mainContainer'>           
                   
          
            <div>
            <h3>Current weather</h3>
            <hr/>
                <h5>Temperature</h5>
                <span></span><br/>
                <span>Minimum Temprature: </span><br/>
                <span>Maximum Temprature:</span>
            </div>
            <div>
            <h5>Hourly Forcast</h5>
               
                <span>23C^0. dgg. ergreg</span>
                
            </div>  
            <div>
            <h5>Weekly Forcast</h5>
               
                <span>23C^0, dg, ergr</span>
                
            </div> 
        </div>
    )
}

export default SearchWeather
