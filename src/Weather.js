import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import gps from './img/gps.png'
import navigator from './img/navigator.png'


const api = {
    key: "67074347dff0d52fafe86bddec1e5224",
    base: "https://api.openweathermap.org/data/2.5/"
}


function Weather() {

  const [query, setQuery] = useState('');
  const [forecast, setForecast] = useState({});

  const search = evt =>{

    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setForecast(result);
        setQuery('');
        console.log(result);
      })
  }
}

  const current = new Date();
  const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;

  const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
 {/*     
  const sunrise = new Date(forecast.sys.sunrise * 1000);
  const sunset = new Date(forecast.sys.sunset * 1000);
  console.log(sunrise);
  console.log(sunset);
  console.log(sunrise.getHours());
  console.log(sunset.getHours());
 
  const sunrise = new Date(forecast.dt * 1000);
  console.log(sunrise);
 */}  

  return (
   
    <div className={(typeof forecast.weather  != "undefined") ? ((forecast.weather[0].main === "Snow") ? 'app snowy' 
                                                              : ((forecast.weather[0].main === "Rain") ? 'app rainy' 
                                                              : ((forecast.weather[0].main === "Clouds") ? 'app cloudy' 
                                                              : ((forecast.weather[0].main === "Thunderstrom") ? 'app thunder' 
                                                              : ((forecast.weather[0].main === "Haze") ? 'app haze' 
                                                              : ((forecast.weather[0].main === "Mist") ? 'app mist' 
                                                              : ((forecast.weather[0].main === "Tornado") ? 'app tornado' 
                                                              : ((forecast.weather[0].main === "Drizzle") ? 'app drizzle' 
                                                              : 'app'))))))))
                                                              : 'app'}>
      <main>     
        <div className='search-box'> 
          <input 
            type="text"
            className="search-bar"
            placeholder='Vyhľadávať'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          >
          </input>
        </div> 
        
        {(typeof forecast.main != "undefined") ? (
          <div> 
             <div className='weather-more-info-1'>            
                <Container className=''>
                  <Row>
                   {/* <Col>{forecast.sys.sunrise * 1000}</Col> */}
                    <Col>{time}</Col>  
                    <Col>{date}</Col>                    
                  </Row>
                </Container>                                                                                                                                                 
            </div>         
              <div className='weather-main-info'>             
                <div className={(typeof forecast.weather[0]  != "undefined") ? ((forecast.weather[0].main === "Snow") ? 'outside snowy' 
                                                                            : ((forecast.weather[0].main === "Rain") ? 'outside raining' 
                                                                            : ((forecast.weather[0].main === "Clouds") ?  'outside clouds'
                                                                            : ((forecast.weather[0].main === "Thunderstorm") ? 'outside thunderstorm'
                                                                            : ((forecast.weather[0].main === "Mist") ? 'outside mist'
                                                                            : ((forecast.weather[0].main === "Haze") ? 'outside haze'
                                                                            : ((forecast.weather[0].main === "Fog") ? 'outside fog'
                                                                            : ((forecast.weather[0].main === "Tornado") ? 'outside tornado'
                                                                            : ((forecast.weather[0].main === "Drizzle") ? 'outside drizzle'
                                                                            : 'outside')))))))))
                                                                            : 'outside'}> 
                </div>  
                <div className='description'> {forecast.weather[0].description}</div>                          
                <div className='temp'> {Math.round(forecast.main.temp)}<span className={(typeof forecast.weather[0]  != "undefined") ? ((forecast.main.temp > 17) ? 'temp-high' 
                                                                                                                                        : 'temp-low')
                                                                                                                                        : 'temp-low'} >
                                                                        °</span> </div>   
                <div className='weather-feels'>Pocitovo: {Math.round(forecast.main.feels_like)}°  </div>   
              <div className='location'> {forecast.name}</div> 
            </div>   

              
            
            <div className='weather-more-info-2'>            
                <Container className=''>
                  <Row>
                    <Col><div className='humidity set-icon'/></Col>                    
                    <Col><div className='thermometer-colder set-icon'/></Col>                    
                    <Col><div className='thermometer-warmer set-icon'/></Col>                   
                  </Row>
                  <Row>
                    <Col>Vlhkosť</Col>
                    <Col>Min. teplota</Col>
                    <Col>Max. teplota</Col>                                     
                  </Row>
                  <Row>
                    <Col>{forecast.main.humidity}%</Col>
                    <Col>{Math.round(forecast.main.temp_min)}°</Col>
                    <Col>{Math.round(forecast.main.temp_max)}°</Col>
                                       
                  </Row>
                  <Row>                
                    <Col><div className={(typeof forecast.main.pressure  != "undefined") ? ((forecast.main.pressure > 1015) ? 'pressure-high' 
                                                                                                       : 'pressure-low')
                                                                                                       : 'pressure-low'}/>
                    </Col>
                                                                                                                           
                    <Col><div className={(typeof forecast.wind.gust  != "undefined") ? ((forecast.wind.gust > 24) ? 'wind-speed-high' 
                                                                                                       : 'wind-speed-weak')
                                                                                                       : 'wind-speed-weak'}/>
                    </Col>
                    <Col><div className={(typeof forecast.wind.speed  != "undefined") ? ((forecast.wind.speed > 24) ? 'wind-speed-high' 
                                                                                                       : 'wind-speed-weak')
                                                                                                       : 'wind-speed-weak'}/>
                    </Col>
                   
                  </Row>
                  <Row>                  
                    <Col>Tlak</Col>
                    <Col>Náraz vetra</Col>
                    <Col>Rýchlosť vetra </Col>                    
                  </Row>
                  <Row>            
                    <Col>{forecast.main.pressure} hPa</Col>
                    <Col>{forecast.wind.gust} m/s</Col>
                    <Col>{forecast.wind.speed} m/s</Col>                    
                  </Row>
                </Container>                                                                                                                                                 
            </div>
      </div>
        ): ('')}
      </main>
    </div>
  );
}

export default Weather;
