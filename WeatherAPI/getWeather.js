async function getWeather(data) {

    // const city = cityInput.value;
    // if (!city) return;

    cityName.textContent = data.location.name + ", " + data.location.country;
    temp.textContent = data.current.temp_c;
    condition.textContent = data.current.condition.text;
    humidity.textContent = data.current.humidity;

}