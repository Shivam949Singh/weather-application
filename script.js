document.getElementById('search-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const cityInput = document.getElementById('city-input');
  const cityName = cityInput.value;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd84c76fa56msha503e6ded132f71p18b4b7jsne17a364a153b',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    document.querySelector('nav h1').textContent = `Weather App - ${cityName}`;

    document.getElementById('temp').textContent = result.temp;
    document.getElementById('min_temp').textContent = result.min_temp;
    document.getElementById('max_temp').textContent = result.max_temp;
    document.getElementById('humidity').textContent = result.humidity;
    document.getElementById('wind_speed').textContent = result.wind_speed;
    document.getElementById('sunrise').textContent = result.sunrise;
    document.getElementById('sunset').textContent = result.sunset;
    document.getElementById('feels_like').textContent = result.feels_like;

  } catch (error) {
    console.error(error);
  }
});
