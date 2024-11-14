const express = require("express")
const app = express()
const PORT = 3000

const axios = require("axios")

const cors = require("cors")

app.use(cors())

// app.get("/home", (req, res) => {
//     console.log(req.query.name)
//     res.send("Hey!")
// })

app.get("/weather", async (req, res) => {
    console.log(req.query.name)
    //const city = (req.query.name)
    // TODO - Make a request to the openweathermap.org API
    // TODO - Return the weather data
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=63f3c05bfc8de92422db12d6f77d759e&units=metric`)
    console.log(response.data)
    
    res.json(response.data)
})

app.listen(3000, () => {
    console.log(`We are using ${PORT}!`)
})