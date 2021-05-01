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

const addNewMovie = () => {

}

module.exports = { getAllMovies, getMoviesByInput, addNewMovie }
