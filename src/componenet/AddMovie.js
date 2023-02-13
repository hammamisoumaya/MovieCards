import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export const AddMovie = ({handelmovie}) => {
    const [name,setname]=useState('')
    const [rate,setrate]=useState()
    const [date,setdate]=useState()
    const [type,settype]=useState('')
    const [description,setdescription]=useState('')
    const [image,setimage]=useState('')


    const handeladd =()=>{
        handelmovie({
            id:uuidv4(),
            name:name,
            rate:rate,
            date:date,
            type:type,
            description:description,
            image:image
        }) 
    }
  return (
    <div>
        <input placeholder='Nom du film' value={name}  onChange={(e)=>setname(e.target.value)}/>
        <input placeholder='rating' value={rate}  onChange={(e)=>setrate(e.target.value)}/>
        <input placeholder='date' value={date}  onChange={(e)=>setdate(e.target.value)}/>
        <input placeholder='type' value={type}  onChange={(e)=>settype(e.target.value)}/>
        <input placeholder='description' value={description}  onChange={(e)=>setdescription(e.target.value)}/>
        <input placeholder='image' value={image}  onChange={(e)=>setimage(e.target.value)}/>
        <button onClick={()=>handeladd()}>Add Movie</button>
    </div>
  )
}
