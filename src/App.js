import './App.css';
import React,{useState} from 'react'
import MovieCard from './componenet/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddMovie } from './componenet/AddMovie';
import Search from './componenet/Search';



function App() {
  const[movie,setmovie]=useState(
    [
      {
        isDone:false,
        id: Math.random(),
        image:
          "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
        rating: 4,
        name: "Devil's Mile",
        date: "2014",
        type: "Action | Crime",
        description:
          "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver..."
      },
      {
        isDone:false,
        id: Math.random(),
        image:
          "https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg",
        rating: 5,
        name: "Once Upon A Time In The west",
        date: "1968",
        type: "Western",
        description:
          "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad."
      },
      {
        isDone:false,
        id: Math.random(),
        image:
          "https://i.pinimg.com/564x/37/bd/f8/37bdf8f405a30977959e112d6f48aec0.jpg",
        rating: 4,
        name: "Taxi Driver",
        date: "1976",
        type: "Crime | Drama",
        description:
          "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute."
      },
      {
        isDone:false,
        id: Math.random(),
        image:
          "https://i.pinimg.com/564x/78/55/ac/7855acc7002b1ae619b1edaa4b595df3.jpg",
        rating: 4,
        name: "Mad Max",
        date: "1979",
        type: "Action | Adventure",
        description:
          "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang."
      },
  
  
    ]
  )


//function filter
const handelmovie=(newmovie)=>{
  setmovie([...movie,newmovie])
}

//search by name

const [search,setsearch]=useState('')


//partie delete
const handeldelete=(ID)=>{
  setmovie(movie.filter((e)=> e.id !== ID))
}

//partie Vu
const handelvu=(ID)=>{
  setmovie(movie.map((el)=> el.id === ID ?{...el,isDone :!el.isDone} :el    ))}




  return (
    <div className="App">

      <h1>Movie Card</h1>
      <Search setsearch={setsearch}/>
      <br/>
<AddMovie handelmovie={handelmovie} />
      <br/>
<MovieCard  movie={movie}   search={search}   handeldelete={handeldelete}   handelvu={handelvu}/>

    </div>
  );
}

export default App;
