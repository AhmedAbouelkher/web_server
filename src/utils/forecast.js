const request = require('request')

const API_KEY = '4e7e106364193f94416b92b0f61ad4e9'

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const weather = body.weather[0]
            const temp = body.main.temp
            const desc = `It is currently ${weather.main} with ${temp} °C and ${weather.description}`
            callback(undefined, desc)
        }
    })
}

module.exports = forecast