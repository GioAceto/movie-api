const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies } = require('./controllers/contMovies')
const port = 1400

const app = express()

app.get('/movies', getAllMovies)


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/movies...`) // eslint-disable-line no-console
})