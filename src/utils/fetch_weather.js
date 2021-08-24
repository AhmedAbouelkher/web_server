const geocode = require('./geocode')
const forecast = require('./forecast')

fetch_weather = (address, callback) => {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return callback(error, undefined)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return callback(error, undefined)
            }

            return callback(undefined, { forecast: forecastData, location })
        })
    })
}

module.exports = fetch_weather