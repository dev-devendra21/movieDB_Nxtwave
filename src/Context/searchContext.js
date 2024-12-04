import React, {useContext, useState} from 'react'

const searchContext = React.createContext({
  searchTerm: '',
  handleSearchTerm: () => {},
  clearSearchTerm: () => {},
})

const SearchProvider = ({children}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearchTerm = value => {
    setSearchTerm(value)
  }

  const clearSearchTerm = () => {
    setSearchTerm('')
  }
  return (
    <>
      <searchContext.Provider
        value={{searchTerm, handleSearchTerm, clearSearchTerm}}
      >
        {children}
      </searchContext.Provider>
    </>
  )
}

export function useSearchQuery() {
  return useContext(searchContext)
}

export default SearchProvider
