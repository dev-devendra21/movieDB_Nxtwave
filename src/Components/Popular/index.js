import {useState} from 'react'
import APISTATUS from '../../utils/constant'
import useFetch from '../../hooks/useFetch'
import LoaderComponent from '../Loader'
import Error from '../Error'
import Content from '../Content'

const totalPage = 500

const Popular = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const getPopularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=2ceb90f0b3bba0d43fcefbd0a6af8dbb&language=en-US&page=${currentPage}`

  const result = useFetch(getPopularMoviesURL)

  const {data, status} = result

  const handlePageChange = pageNo => {
    setCurrentPage(pageNo)
  }

  let content

  if (status === APISTATUS.LOADING) {
    content = <LoaderComponent />
  }

  if (status === APISTATUS.ERROR) {
    content = <Error />
  }

  if (status === APISTATUS.IDLE) {
    content = (
      <Content
        data={data}
        title="Popular Movies"
        handlePageChange={handlePageChange}
        page={currentPage}
        totalPages={totalPage}
      />
    )
  }
  return <>{content}</>
}

export default Popular
