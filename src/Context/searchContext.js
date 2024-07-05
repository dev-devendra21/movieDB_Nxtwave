import React, {useContext, useState} from 'react'

const searchContext = React.createContext({
  searchTerm: '',
  handleSearchTerm: () => {},
})

const SearchProvider = ({children}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearchTerm = value => {
    setSearchTerm(value)
  }
  return (
    <>
      <searchContext.Provider value={{searchTerm, handleSearchTerm}}>
        {children}
      </searchContext.Provider>
    </>
  )
}

export function useSearchQuery() {
  return useContext(searchContext)
}

export default SearchProvider
