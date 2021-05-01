const movies = require('../movies')

const getAllMovies = (req, res) => {
  return res.send(movies)
}

const getMoviesByInput = (req, res) => {
  const { result } = req.params

  const foundMovie = movies.filter((movie) => {
    let byTitle = movie.title.toLowerCase().includes(result)
    let byDirector = movie.directors[0].toLowerCase().includes(result)

    return byTitle || byDirector
  })

  return res.send(foundMovie)
}

const addNewMovie = (req, res) => {
  const { title, directors, releaseDate, rating, runTime, genres } = req.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    res.status(400).send('Must contain all inputs')
  } else {
    const newMovie = { title, directors, releaseDate, rating, runTime, genres }

    movies.push(newMovie)

    return res.send(newMovie)
  }
}

module.exports = { getAllMovies, getMoviesByInput, addNewMovie }
