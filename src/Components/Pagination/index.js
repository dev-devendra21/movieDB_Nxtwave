import './index.css'

function Pagination({page, handlePageChange}) {
  return (
    <div className="pagination">
      <div className="pagination-container">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
          className="previous pagination-btn"
        >
          Prev
        </button>
        <p className="current-page">{page}</p>
        <button
          type="button"
          onClick={() => handlePageChange(page + 1)}
          className="next pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
