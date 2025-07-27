const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const api = require('./routes/api');
// const planetsRouter = require('./routes/planets/planets.router.js')
// const launchesRouter = require('./routes/launches/launches.router.js')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/v1', api)

// app.use('/v1/planets', planetsRouter)
// app.use('/v1/launches', launchesRouter)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app;