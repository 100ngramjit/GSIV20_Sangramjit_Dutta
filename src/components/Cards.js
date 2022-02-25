import React from 'react'
import './style.css';
import {Link} from 'react-router-dom';


function Cards({
    id,poster,title,rating,desc
}) {
  return (
    <Link className="cards" to={{pathname: `details/${id}`, query: {id}}}>
    <div className='media'>
        <img className="poster" src={`https://image.tmdb.org/t/p/w300/${poster}`} alt={title}/>
        <b className="title">{title}</b>
        <h5 className="rating">{rating}</h5>
        <p>{desc.split('.')[0]+'.'+ desc.split('.')[1]+'...'}</p>
       
    </div>
     </Link>
  )
}

export default Cards