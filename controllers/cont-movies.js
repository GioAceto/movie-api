const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMoviesByInput = (request, response) => {
  const { result } = request.params
  console.log(result)

  const foundMovie = movies.filter((movie) => {
    let byTitle = movie.title.toLowerCase().includes(result)
    let byDirector = movie.directors[0].toLowerCase().includes(result)

    return byTitle || byDirector
  })

  return response.send(foundMovie)
}

module.exports = { getAllMovies, getMoviesByInput }
