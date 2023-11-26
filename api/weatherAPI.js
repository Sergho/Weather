const axios = require('axios')
let config
try {
    config = require('../config/appconfig')
} catch (error) {
    console.log("Error while reading config file. Try run program with -s and -t flags")
    process.exit(1)
}


async function getWeather(daysCount, site, apiToken){
    if(apiToken === undefined) apiToken = config.apiToken
    if(site === undefined) site = config.defaultSite
    let data = {
        site: site,
        weather: []
    }
    const response = await axios.get(config.weatherUrl, {
        params: {
            key: apiToken,
            q: site,
            days: daysCount,
        }
    })
    const days = Array.from(response.data.forecast.forecastday)
    days.forEach((day) => {
        data.weather.push({
            date: day.date,
            maxtemp: day.day.maxtemp_c,
            mintemp: day.day.mintemp_c,
            condition: day.day.condition.text
        })
    })
    return data
}

exports.getWeather = getWeather;