let form = document.querySelector('#weatherForm');
let resultBox = document.querySelector('#weatherResult');

let getWeather = async (e) => {
    e.preventDefault();

    let cityName = document.querySelector('#cityNameInput').value.trim();

    resultBox.innerHTML = '';

    try {
        const response = await fetch(`/weather/${cityName}`);
        if (!response.ok) {
            throw new Error("City not found or server error");
        }

        const data = await response.json();
        console.log(data)

        const weather = data.data;
        resultBox.innerHTML = `
            <h3>Weather in ${weather.city}</h3>
            <p>Condition: ${weather.condition}</p>
            <p>Temperature: ${weather.temp_C}°C</p>
            <p>Humidity: ${weather.humidity}</p>
            <p>Wind: ${weather.wind_kph} kph</p>
        `;
    } catch (error) {
        resultBox.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
};

form.addEventListener('submit', getWeather);
