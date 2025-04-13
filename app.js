import express from 'express';
import path  from 'path';
const __dirname = path.resolve()

const app = express();
const PORT = process.env.PORT || 3000;

const weatherData = {

    karachi: {
        status: "success",
        message: "Weather data for Karachi",
        data: {
            city: "Karachi",
            temp_C: 11,
            temp_F: 52,
            condition: "Mostly Cloudy",
            humidity: "70%",
            high_C: 22,
            low_C: 7,
            wind_kph: 18,
            sunrise: "06:30 AM",
            sunset: "07:15 PM",
            air_quality: "Good"
        }
    },

    london: {
        status: "success",
        message: "Weather data for London",
        data: {
            city: "London",
            temp_C: 11,
            temp_F: 52,
            condition: "Mostly Cloudy",
            humidity: "70%",
            high_C: 22,
            low_C: 7,
            wind_kph: 18,
            sunrise: "06:30 AM",
            sunset: "07:15 PM",
            air_quality: "Good"
        }
    },

    islamabad: {
        status: "success",
        message: "Weather data for Islamabad",
        data: {
            city: "Islamabad",
            temp_C: 15,
            temp_F: 59,
            condition: "Clear",
            humidity: "50%",
            high_C: 23,
            low_C: 10,
            wind_kph: 10,
            sunrise: "06:15 AM",
            sunset: "07:00 PM",
            air_quality: "Good"
        }
    },

    lahore: {
        status: "success",
        message: "Weather data for Lahore",
        data: {
            city: "Lahore",
            temp_C: 18,
            temp_F: 64,
            condition: "Partly Sunny",
            humidity: "60%",
            high_C: 26,
            low_C: 14,
            wind_kph: 12,
            sunrise: "06:20 AM",
            sunset: "07:10 PM",
            air_quality: "Moderate"
        }
    },
    
    tokyo: {
        status: "success",
        message: "Weather data for Tokyo",
        data: {
            city: "Tokyo",
            temp_C: 20,
            temp_F: 68,
            condition: "Sunny",
            humidity: "40%",
            high_C: 24,
            low_C: 16,
            wind_kph: 15,
            sunrise: "05:45 AM",
            sunset: "06:50 PM",
            air_quality: "Good"
        }
    },
    dubai: {
        status: "success",
        message: "Weather data for Dubai",
        data: {
            city: "Dubai",
            temp_C: 33,
            temp_F: 91,
            condition: "Clear",
            humidity: "20%",
            high_C: 37,
            low_C: 29,
            wind_kph: 10,
            sunrise: "05:55 AM",
            sunset: "06:45 PM",
            air_quality: "Moderate"
        }
    },    
};

app.get('/weather/:cityName', (req, res) => {
    const userInputCityName = req.params.cityName.toLowerCase();
    const weatherDataToSend = weatherData[userInputCityName];

    if (weatherDataToSend) {
        res.status(200).json(weatherDataToSend);
    } else {
        res.status(404).json({
            status: "error",
            message: "City not found. Please check the city name and try again."
        });
    }
});

app.get('/weather', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Weather data fetched successfully for all available cities.',
        data: [weatherData]
    });
});

app.use('/', express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`);
});