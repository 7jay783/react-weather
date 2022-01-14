import React, {useState, useEffect} from 'react'
import '../searchWeather.css';
function SearchWeather() {
    const [lat, setlat] = useState(null);
    const [lon, setlon] = useState(null)
    const [data, setdata]= useState(null);
    const [iconurl, seticonurl]= useState(null);
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
        setdata(res)
        seticonurl(`http://openweathermap.org/img/wn/${res.weather[0].icon}.png`)
             
      }
      if(lat!=null)
        fetchApi();
    }, [lat])
    return (data!= null?
        <div className='mainContainer'>           
                   
          
            <div>
            <h3>Weather at your city</h3>
            
           
                    
                    <span style={{fontSize:'30px'}}>{data.name}</span><br/>
                    <hr/>
                    <span style={{fontSize:'60px'}}>{Math.floor(data.main.temp)}<sup style={{fontSize:'30px'}}> <span> &#8451;</span> </sup></span><br/>
                    <span>{data.weather[0].main}</span><br/>
                    <span></span>
                </div>
                <div>
                    
                    <img src={iconurl} alt='weather icon'/>
                </div>  
               
               <div className='weather_details'>
                <div className='table1'>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <h5>Wind direction: </h5>
                            </td>
                            <td>
                                <span>{data.wind.deg}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Wind speed: </h5>
                            </td>
                            <td>
                            <span>{data.wind.speed}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Humidity: </h5>
                            </td>
                            <td>
                            <span>{data.main.humidity} %</span>
                            </td>
                        </tr>
                        </tbody>
                       
                    </table>
                  
                </div>
                <div className='table2'>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <h5>Sunrise: </h5>
                            </td>
                            <td>
                                <span>{new Date(data.sys.sunrise*1000).toLocaleTimeString()}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Sunset: </h5>
                            </td>
                            <td>
                            <span>{new Date(data.sys.sunset*1000).toLocaleTimeString()}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Pressure: </h5>
                            </td>
                            <td>
                            <span>{data.main.pressure} hPa</span>
                            </td>
                        </tr>
                        </tbody>
                       
                    </table>
                    
                </div>
            </div>
          </div>:<div>Data not found</div>
    )
}

export default SearchWeather
