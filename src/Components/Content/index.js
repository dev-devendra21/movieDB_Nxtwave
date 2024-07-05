import Card from '../Card'
import Pagination from '../Pagination'
import './index.css'
import Error from '../Error'

function Content({data, title, handlePageChange, page, totalPages}) {
  if (!data) {
    return <Error />
  }
  return (
    <div className="content-container">
      <h1 className="content-header">{title}</h1>
      <ul className="card-list-container">
        {data?.results?.map(movie => (
          <Card
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            poster={movie.poster_path}
            id={movie.id}
          />
        ))}
      </ul>
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  )
}

export default Content
