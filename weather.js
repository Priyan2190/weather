const btn = document.getElementById("btnop");
btn.onclick = () => {
  searchCity();
};

const searchCity = async () => {
  const city = document.getElementById("cityName").value;

  console.log(city);
  const data = await getWeatherData(city);
  showWeatherData(data);
};
const getWeatherData = async (city) => {
  const APIKey = `ef1037c3e44d276188a54f2cfdf2dda6`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
const showWeatherData = (data) => {
  console.log(data);
  document.getElementById("temp").innerText = data.main.temp;
  document.getElementById("min-temp").innerText = data.main.temp_min;

  document.getElementById("max-temp").innerText = data.main.temp_max;
  document.getElementById("icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icons">`;
  document.getElementById("city-name").innerText = data.name;
  document.getElementById("weather-type").innerText = data.weather[0].description;
};
