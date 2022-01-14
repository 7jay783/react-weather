import './App.css';
import SearchWeather from './components/SearchWeather';
import WeatherByCity from './components/WeatherByCity';

function App() {
  return (
    <div className="App">
     <SearchWeather/>
     <WeatherByCity/>
    </div>
  );
}

export default App;
