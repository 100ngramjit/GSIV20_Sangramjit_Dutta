import React, {useState, useEffect} from 'react'
import './style.css';
import {useParams} from 'react-router';
import axios from 'axios';

function Details() {

  const {id} = useParams();
  const [item, setItem] = useState(null);
  const[erro, setErro] = useState(null);
  const[load, setLoad] = useState(false);


  useEffect(() => {
    const getDetail = async()=>{  
            try{
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2f79f363fb4398298fea2fddf5996e0d&language=en-US`)
                console.log(response.data)
                setItem(response.data);
            }catch(err){
                setErro(err.message);
                setItem(null);
            }finally{
                setLoad(false);
            }          
        }
        getDetail();
  }, [id]);

  console.log(item.poster_path)
  return (
        <>
        <div className="det">
          <div className="line1">
          <img className="poster" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
          </div>
          
          
        
        <div className="line2">
        <h3>{item.title}({item.vote_average})</h3>
              <p>{item.release_date}|{item.runtime}mins|</p>
              <p>Description:{item.overview}</p>
          </div>
          </div>

         </>
   
  )
}

export default Details;