import React from 'react'

function Search({ search, handleSearchInputChange }) {
  return (
    <div>      
      <input
        type="text"
        value={search}
        onChange={handleSearchInputChange}
        placeholder="Buscar contenido..."
      />
    </div>
  )
}

export default Search;
