const {program} = require('commander')
const api = require('./api/weatherAPI')

program
    .option('-s, --site <string>', 'Specify the location')
    .option('-t, --token <string>', 'Specify token WeatherAPI')
    .parse(process.argv)

const options = program.opts()

api.getWeather(3, options.site, options.token).then((data) => {
    console.log(`Weather in ${data.site}:\n`)
    const days = Array.from(data.weather)
    days.forEach((day) => {
        console.log(`[${day.date}]`)
        console.log(`Temperature: ${day.mintemp}/${day.maxtemp}`)
        console.log(`Weather conditions: ${day.condition}\n`)
    })
}).catch((err) => {
    console.log(err.toString())
})