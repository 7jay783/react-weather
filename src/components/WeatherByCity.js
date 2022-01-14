import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../searchWeather.css';
function WeatherByCity() {
    const [allData, setAllData]= useState(null);
    const [search, setsearch]= useState('Delhi');
    const [iconurl, seticonurl]= useState(null);

    useEffect(() => {
         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=860417d76e4ab27e5185b3c8313ab080`)
         .then((res)=>{          
             setAllData(res.data);
             seticonurl(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`)
             
         })
       
        
    }, [search])
   
    return ( allData!= null?
        <div className='mainContainer'>           
            <div className="custom_field"> 
                <input placeholder='Enter city' onChange={e=>setsearch(e.target.value)} id="search field" type="text"/>
            </div>         
           
            <div>
                
            <h3>Current weather</h3>
            <hr/>
                
                <span style={{fontSize:'30px'}}>{allData.name}</span><br/>
                <span style={{fontSize:'60px'}}>{Math.floor(allData.main.temp)}<sup style={{fontSize:'30px'}}> <span> &#8451;</span> </sup></span><br/>
                <span>{allData.weather[0].main}</span><br/>
                <span></span>
            </div>
            <div>
                
                <img src={iconurl} alt=''/>
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
                            <span>{allData.wind.deg}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>Wind speed: </h5>
                        </td>
                        <td>
                        <span>{allData.wind.speed}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>Humidity: </h5>
                        </td>
                        <td>
                        <span>{allData.main.humidity} %</span>
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
                            <span>{new Date(allData.sys.sunrise*1000).toLocaleTimeString()}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>Sunset: </h5>
                        </td>
                        <td>
                        <span>{new Date(allData.sys.sunset*1000).toLocaleTimeString()}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>Pressure: </h5>
                        </td>
                        <td>
                        <span>{allData.main.pressure} hPa</span>
                        </td>
                    </tr>
                    </tbody>
                   
                </table>
                
            </div>
        </div>
        </div>:<div>Data not found</div>
    )
}

export default WeatherByCity
