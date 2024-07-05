import {useState} from 'react'
import APISTATUS from '../../utils/constant'
import useFetch from '../../hooks/useFetch'
import LoaderComponent from '../Loader'
import Error from '../Error'
import Content from '../Content'
import {useSearchQuery} from '../../Context/searchContext'

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const {searchTerm} = useSearchQuery()
  const result = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=2ceb90f0b3bba0d43fcefbd0a6af8dbb&language=en-US&query=${searchTerm}&page=${currentPage}`,
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
        title="Search Movies"
        handlePageChange={handlePageChange}
        page={currentPage}
        totalPages={data?.total_pages}
      />
    )
  }
  return <>{content}</>
}

export default Search
