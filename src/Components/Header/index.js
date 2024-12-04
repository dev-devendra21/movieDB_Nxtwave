import {useRef} from 'react'
import './index.css'
import {NavLink, useHistory, withRouter} from 'react-router-dom'
import {useSearchQuery} from '../../Context/searchContext'

const Header = () => {
  const searchQuery = useRef('')
  const history = useHistory()
  const {handleSearchTerm, clearSearchTerm} = useSearchQuery()

  const handleSearchInput = () => {
    handleSearchTerm(searchQuery.current.value)
    history.replace('/')
    searchQuery.current.value = ''
  }

  const handleClearSearchInput = () => {
    clearSearchTerm()
    history.replace('/')
  }
  return (
    <>
      <header className="nav-bar">
        <nav>
          <h1 className="nav-logo">MovieDB</h1>
        </nav>
        <nav className="nav-link-and-search-container">
          <ul className="nav-link-container">
            <NavLink
              exact
              to="/"
              activeStyle={{color: 'red'}}
              className="nav-link"
              onClick={handleClearSearchInput}
            >
              <li>Popular</li>
            </NavLink>
            <NavLink
              to="/top-rated"
              activeStyle={{color: 'red'}}
              className="nav-link"
            >
              <li>Top Rated</li>
            </NavLink>
            <NavLink
              to="/upcoming"
              activeStyle={{color: 'red'}}
              className="nav-link"
            >
              <li>Upcoming</li>
            </NavLink>
          </ul>
          <div>
            <input
              placeholder="Movie Name"
              onKeyDown={e => e.key === 'Enter' && handleSearchInput()}
              type="search"
              ref={searchQuery}
              className="search-input"
            />
            <button
              onClick={handleSearchInput}
              type="button"
              className="search-btn"
            >
              Search
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default withRouter(Header)
