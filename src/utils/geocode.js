const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmF5bjI0MDIiLCJhIjoiY2s4cXJnYm5qMDVsejNmczFzdXVpeWF1ZiJ9.4ES-Q-NaenWpzPbGuayUZw&limit=1'

    request({url, json:true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const {center:coordinates, place_name:location} = body.features[0]
            callback(undefined, {
                latitude: coordinates[1],
                longitude: coordinates[0],
                location
            })
        }
    })
}

module.exports = geocode