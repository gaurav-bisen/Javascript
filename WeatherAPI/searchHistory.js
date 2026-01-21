function saveCity(city) {
    let history = JSON.parse(localStorage.getItem("cityHistory")) || [];

    history = history.filter(
        c => c.toLowerCase() !== city.toLowerCase()
    );

    history.unshift(city);
    history = history.slice(0, 5);


    localStorage.setItem("cityHistory", JSON.stringify(history));

    saveAllSearch();
}

function saveAllSearch() {
    const history = JSON.parse(localStorage.getItem("cityHistory")) || [];
    const container = document.getElementById("searchHistory");

    container.innerHTML = "";

    history.forEach(city => {
        const btn = document.createElement("button");
        btn.textContent = city;
        btn.className = "block text-center flex items-center justify-center w-full text-left px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded";

        btn.addEventListener("click", async () => {
            cityInput.value = city;

            errorDiv.classList.add("hidden");
            resultDiv.classList.add("hidden");
            loading.classList.remove("hidden");

            try {
                const data = await service.getWeather(city);
                await getWeather(data);
                await getAirQuality(data);
                resultDiv.classList.remove("hidden");
                loading.classList.add("hidden");

            } catch (err) {
                errorDiv.textContent = err.message;
                errorDiv.classList.remove("hidden");
            }
        });
        container.appendChild(btn);
    });
}

//to load when page referesh
document.addEventListener("DOMContentLoaded", () => {
    saveAllSearch();
})