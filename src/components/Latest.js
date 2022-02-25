import React from 'react'
import './style.css';
import Cards from './Cards'

function Latest({data}) {

  return (
    <>
    <div className="Latest">
       {
         data && data.map((c)=>(
            <Cards key={c.id} id={c.id} poster={c.poster_path} title={c.title} rating={c.vote_average} desc={c.overview} />
         ))
       }
    </div> 
    </>
  );
}

export default Latest