import './index.css'

function Pagination({page, totalPages, handlePageChange}) {
  return (
    <div className="pagination">
      <div className="pagination-container">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
          className="previous pagination-btn"
        >
          Previous
        </button>
        <p>
          Page No. {page} of {totalPages}
        </p>
        <button
          type="button"
          disabled={page === totalPages}
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
