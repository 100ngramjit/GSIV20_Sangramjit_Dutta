import React from 'react'
import './style.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Cards from './Cards'

function Latest() {
  const [content,setContent]=useState([]);

  const fetchLatest=async()=>{
    const {data}=await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=2f79f363fb4398298fea2fddf5996e0d&language=en-US&page=1");
    console.log(data.results);
    setContent(data.results);
  }
  useEffect(()=>{
    fetchLatest();
  },[])
  return (
    <>
    <h1>Latest Movies</h1>
    <div className="Latest">
       {
         content && content.map((c)=>(
            <Cards key={c.id} id={c.id} poster={c.poster_path} title={c.title} rating={c.vote_average} desc={c.overview} />
         ))
       }
    </div> 
    </>
  );
}

export default Latest