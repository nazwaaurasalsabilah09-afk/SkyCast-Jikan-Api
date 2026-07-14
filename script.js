// ==============================
// ELEMENT
// ==============================
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");
const rain = document.getElementById("rain");
const localTime = document.getElementById("localTime");
const localDate = document.getElementById("localDate");
const rainChance = document.getElementById("rainChance");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const coordinate = document.getElementById("coordinate");
const weatherIcon = document.querySelector(".weather-icon");

// ==============================
// SEARCH BUTTON
// ==============================
searchBtn.addEventListener("click", searchWeather);

cityInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchWeather();
    }
});

// ==============================
// SEARCH WEATHER
// ==============================
async function searchWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Silakan masukkan nama kota.");
        return;
    }

    try {

        // Geocoding
        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=id&format=json`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            alert("Kota tidak ditemukan.");
            return;
        }

        const place = geoData.results[0];

        const latitude = place.latitude;
        const longitude = place.longitude;

        // Weather API
        const weatherResponse = await fetch(
`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code,precipitation&hourly=precipitation_probability&forecast_hours=1&timezone=auto`
);
        const weatherData = await weatherResponse.json();

        const current = weatherData.current;

        cityName.textContent = `${place.name}, ${place.country}`;
        temperature.textContent = `${current.temperature_2m}°C`;
        humidity.textContent = `${current.relative_humidity_2m}%`;
        wind.textContent = `${current.wind_speed_10m} km/h`;
        feelsLike.textContent = `${current.apparent_temperature}°C`;
        coordinate.textContent = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
        rain.textContent = `${current.precipitation} mm`;
        rainChance.textContent =
    weatherData.hourly.precipitation_probability[0] + "%";

const waktu = new Date(current.time);

localTime.textContent = waktu.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit"
});

localDate.textContent = waktu.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});

        const weather = getWeather(current.weather_code);

        description.textContent = weather.text;
        weatherIcon.textContent = weather.icon;

        changeBackground(current.weather_code);

    } catch (error) {

        console.log(error);
        alert("Terjadi kesalahan saat mengambil data cuaca.");

    }

}

// ==============================
// WEATHER CODE
// ==============================
function getWeather(code) {

    switch (code) {

        case 0:
            return {
                text: "Langit Cerah",
                icon: "☀️"
            };

        case 1:
        case 2:
            return {
                text: "Sebagian Berawan",
                icon: "🌤️"
            };

        case 3:
            return {
                text: "Berawan",
                icon: "☁️"
            };

        case 45:
        case 48:
            return {
                text: "Berkabut",
                icon: "🌫️"
            };

        case 51:
        case 53:
        case 55:
            return {
                text: "Gerimis",
                icon: "🌦️"
            };

        case 61:
        case 63:
        case 65:
            return {
                text: "Hujan",
                icon: "🌧️"
            };

        case 71:
        case 73:
        case 75:
            return {
                text: "Salju",
                icon: "❄️"
            };

        case 80:
        case 81:
        case 82:
            return {
                text: "Hujan Lokal",
                icon: "🌦️"
            };

        case 95:
            return {
                text: "Badai Petir",
                icon: "⛈️"
            };

        default:
            return {
                text: "Cuaca Tidak Diketahui",
                icon: "🌍"
            };

    }

}

// ==============================
// BACKGROUND
// ==============================
function changeBackground(code) {

    if (code === 0) {

        document.body.style.background =
            "linear-gradient(135deg,#56CCF2,#2F80ED)";

    } else if (code >= 1 && code <= 3) {

        document.body.style.background =
            "linear-gradient(135deg,#bdc3c7,#2c3e50)";

    } else if (
        code === 51 ||
        code === 53 ||
        code === 55 ||
        code === 61 ||
        code === 63 ||
        code === 65 ||
        code === 80 ||
        code === 81 ||
        code === 82
    ) {

        document.body.style.background =
            "linear-gradient(135deg,#4b6cb7,#182848)";

    } else if (code === 95) {

        document.body.style.background =
            "linear-gradient(135deg,#232526,#414345)";

    } else {

        document.body.style.background =
            "linear-gradient(135deg,#4facfe,#00f2fe)";

    }

}

// ==============================
// DEFAULT CITY
// ==============================
window.onload = () => {

    cityInput.value = "Jakarta";
    searchWeather();

};