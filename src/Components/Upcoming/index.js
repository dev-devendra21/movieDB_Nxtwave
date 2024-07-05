import {useState} from 'react'
import APISTATUS from '../../utils/constant'
import useFetch from '../../hooks/useFetch'
import LoaderComponent from '../Loader'
import Error from '../Error'
import Content from '../Content'

const Upcoming = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const result = useFetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=2ceb90f0b3bba0d43fcefbd0a6af8dbb&language=en-US&page=${currentPage}`,
  )
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
        title="Upcoming Movies"
        handlePageChange={handlePageChange}
        page={currentPage}
        totalPages={data?.total_pages}
      />
    )
  }
  return <>{content}</>
}

export default Upcoming
