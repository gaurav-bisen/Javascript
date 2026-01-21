const API_KEY = "a3f988813dbc4ee68d851928262101";

class WeatherService {
    async getWeather(city) {
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=yes`;
        const response = await fetch(url);

        if (!response.ok) {
            const err = await response.json();
            console.log(err);
            throw new Error( "City not found");
        }

        return response.json();
    }
}
