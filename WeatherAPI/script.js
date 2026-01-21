const service = new WeatherService();

btn.addEventListener("click", async () => {
    const city = cityInput.value;
    if (!city) return;

    // errorDiv.classList.add("hidden");
    resultDiv.classList.add("hidden");
    loading.classList.remove("hidden");

    try {
        const data = await service.getWeather(city);

        await getWeather(data);

        await getAirQuality(data);

        //history
        saveCity(city);

        resultDiv.classList.remove("hidden");
        loading.classList.add("hidden");
    } catch (err) {
        errorDiv.textContent = err.message;
        errorDiv.classList.remove("hidden");
        loading.classList.add("hidden");
    }
});


