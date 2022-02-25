import React from 'react'
import './style.css';

function Cards({
    id,poster,title,rating,desc
}) {
  return (
    <div className='media'>
        <img className="poster" src={`https://image.tmdb.org/t/p/w300/${poster}`} alt={title}/>
        <b className="title">{title}</b>
        <h5 className="rating">{rating}</h5>
        <p>{desc}</p>
    </div>
  )
}

export default Cards