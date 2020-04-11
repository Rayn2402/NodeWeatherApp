const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5ca8fad595f617e7e43a0b09b0013302&query='+ latitude + ',' + longitude + '&units=m'
    request({url, json:true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const {weather_descriptions, temperature, feelslike, humidity} = body.current
            callback(undefined, weather_descriptions[0] + '. It is currently ' + temperature + ' degrees and feels like ' + feelslike + ' with ' + humidity + '% of humidity.')
        }
    })

}
module.exports = forecast
