import Popular from '../Popular'
import Search from '../Search'
import {useSearchQuery} from '../../Context/searchContext'

const Home = () => {
  const {searchTerm} = useSearchQuery()
  return <div>{searchTerm ? <Search /> : <Popular />}</div>
}

export default Home
