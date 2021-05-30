const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMoviesByInput, addNewMovie } = require('./controllers/cont-movies')
const PORT = 1400

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:result', getMoviesByInput)

app.post('/movies', bodyParser.json(), addNewMovie)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/movies...`) // eslint-disable-line no-console
})