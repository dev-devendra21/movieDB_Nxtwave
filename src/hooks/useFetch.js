import {useState, useEffect} from 'react'
import APISTATUS from '../utils/constant'

const useFetch = url => {
  const [result, setResult] = useState({
    data: [],
    status: APISTATUS.LOADING,
    error: null,
  })

  useEffect(() => {
    setResult(prev => ({
      ...prev,
      status: APISTATUS.LOADING,
    }))
    const fetchMovies = async () => {
      const response = await fetch(url)
      if (response.ok) {
        const value = await response.json()
        setResult({
          data: value,
          status: APISTATUS.IDLE,
          error: null,
        })
      } else {
        setResult({
          data: [],
          status: APISTATUS.ERROR,
          error: 'Fail to get movies',
        })
      }
    }
    fetchMovies()
  }, [url])
  return result
}

export default useFetch
