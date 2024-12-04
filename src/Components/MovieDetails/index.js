import {useState, useEffect, useCallback} from 'react'
import {useParams} from 'react-router-dom'
import APISTATUS from '../../utils/constant'
import Loader from '../Loader'
import Error from '../Error'
import MovieCastCard from '../MovieCastCard'
import MovieDetailsCard from '../MovieDetailsCard'
import './index.css'

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({
    data: [],
    status: APISTATUS.LOADING,
    error: null,
  })

  const [castData, setCastData] = useState({
    data: [],
    status: APISTATUS.LOADING,
    error: null,
  })

  const {id} = useParams()

  const fetchMovies = useCallback(async () => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=2ceb90f0b3bba0d43fcefbd0a6af8dbb&language=en-US`
    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=2ceb90f0b3bba0d43fcefbd0a6af8dbb&language=en-US`
    const [movieResponse, castResponse] = await Promise.all([
      fetch(movieUrl),
      fetch(castUrl),
    ])
    // Movie details
    if (movieResponse.ok) {
      const value = await movieResponse.json()
      setMovieData({
        data: value,
        status: APISTATUS.IDLE,
        error: null,
      })
    } else {
      setMovieData({
        data: [],
        status: APISTATUS.ERROR,
        error: 'Fail to get movies details',
      })
    }

    // Movie Cast
    if (castResponse.ok) {
      const value = await castResponse.json()
      setCastData({
        data: value,
        status: APISTATUS.IDLE,
        error: null,
      })
    } else {
      setCastData({
        data: [],
        status: APISTATUS.ERROR,
        error: 'Fail to get Cast',
      })
    }
  }, [id])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  let movieContent

  let castContent

  if (
    movieData.status === APISTATUS.LOADING &&
    castData.status === APISTATUS.LOADING
  ) {
    movieContent = <Loader />
  }

  if (
    movieData.status === APISTATUS.IDLE &&
    castData.status === APISTATUS.IDLE
  ) {
    movieContent = <MovieDetailsCard description={movieData.data} />
    castContent = (
      <ul className="cast-container">
        {castData.data.cast.map(eachCast => (
          <MovieCastCard cast={eachCast} key={eachCast.id} />
        ))}
      </ul>
    )
  }

  if (
    movieData.status === APISTATUS.ERROR &&
    castData.status === APISTATUS.ERROR
  ) {
    movieContent = <Error />
  }

  return (
    <>
      {movieContent} {castContent}
    </>
  )
}

export default MovieDetails
