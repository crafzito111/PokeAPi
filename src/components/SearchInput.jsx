import React from 'react'

const SearchInput = ({ setPokesearch, setOptionType }) => {

    const handleSubmit = e => {
        e.preventDefault()
        setPokesearch(e.target.search.value.trim().toLowerCase())
        setOptionType('All')
    }

  return (
   <form onSubmit={handleSubmit}>
    <input id='search' type="text" placeholder='Pokemon name...'/>
  <button className='search_btn'>Search</button>
   </form>

  )
}

export default SearchInput