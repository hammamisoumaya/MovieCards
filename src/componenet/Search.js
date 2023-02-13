import React from 'react'


const Search = ({setsearch}) => {
  return (
    <div style={{ width: '100%',
        height: '31px',
        borderradius: '4px',
        backgroundColor: 'green' ,
        transition: '0.3s'}}>
        <input placeholder='search a movie' onChange={(e)=>setsearch(e.target.value)} />
    </div>
  )
}

export default Search