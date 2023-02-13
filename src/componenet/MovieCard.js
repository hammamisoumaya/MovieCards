import React from 'react'
import MovieList from './MovieList'

const MovieCard = ({movie,search,handeldelete}) => {
    console.log('movie',movie)
  return (
    <div>
        {
        movie.filter((el)=> el.name.toLowerCase().includes(search.toLowerCase().trim()))
        .map((e)=><MovieList  movie={e} handeldelete={handeldelete}/>) }

    </div>

  )
}

export default MovieCard