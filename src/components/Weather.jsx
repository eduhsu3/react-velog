import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;
function Weather() {
  const [weather, setWeather] = useState();

  function getPosition() {
    navigator.geolocation.getCurrentPosition(
      async (positon) => {
        const pos = positon.coords;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log(data.name);
        const makeObj = { temp: data.main.temp, humidity: data.main.humidity, city: data.name };
        console.log(makeObj);
        setWeather(makeObj);
      },
      (error) => {
        console.log('날씨 에러', error);
      }
    );
  }

  useEffect(() => {
    getPosition();
  }, []);

  console.log('ddddd', weather);

  return <span className="weather">온도 : {weather?.temp ?? '로딩중'}</span>;
}

export default Weather;
