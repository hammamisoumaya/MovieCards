import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MovieList = ({movie,handeldelete,handelvu}) => {

const remove=()=>{
  handeldelete(movie.id)
}
const Vu=()=>{
  handelvu(movie.id)
}

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title><h1 style={{color:"red"}}>{movie.name}</h1></Card.Title>
       
        <Card.Text>
        {movie.description}
        </Card.Text>
      
        <h1>{movie.rating}</h1>
      
        <h1>{movie.date}</h1>
        
        <h1>{movie.type}</h1>
        
        <Button variant="primary" >Go somewhere</Button>
      </Card.Body>
    </Card>
    <>
      <Button onClick={()=>remove()}  variant="primary" size="lg" active>
        Delete
      </Button>{' '}
      <Button onClick={()=>Vu()} variant="secondary" size="lg" active>
       {movie.isDone ? "Vu" : "Non vu"}
      </Button>
    </>
    </div>
  )
}

export default MovieList