async function getAirQuality(data) {
    // const city = cityInput.value;
    // if (!city) return;

    const aqi = data.current.air_quality;
    const aqiIndex = aqi["us-epa-index"];

    // aqiValue.textContent = aqi["us-epa-index"];

    aqiValue.textContent = aqiIndex;
    aqiMessage.textContent = getAqiMessage(aqiIndex);


    const pollutants = Object.keys(aqi);
    const maxValue = Math.max(...pollutants.map(p => aqi[p]));
    const main = pollutants.find(p => aqi[p] === maxValue);
    mainPollutant.textContent = `${main.toUpperCase()}  (${maxValue})`;
}