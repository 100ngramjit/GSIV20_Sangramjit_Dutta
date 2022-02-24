import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import Cards from './Cards'

function Search() {
  const [searchtxt,setsearchtxt]=useState("")
  const [content,setcontent]=useState({})

//   const fetchSearch=async()=>{
//     const {data}= await axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=2f79f363fb4398298fea2fddf5996e0d&query=${searchtxt}&page=1`)
//     setcontent(data.results)
//     console.log(data.results)
//  }
//   useEffect(()=>{
//       fetchSearch();
//   },[])
  const abc = (e) => {
      e.preventDefault();
      fetch(`https://api.themoviedb.org/3/search/keyword?api_key=2f79f363fb4398298fea2fddf5996e0d&query=${searchtxt}&page=1`)
      .then((resp)=>resp.json())
      .then((result)=>{
          
          console.log('hi',result)
          console.log('hi',result.results)
          setcontent(result.results)
          console.log('last',content[0].name)

      })
      .catch((err)=>console.log(err))
  }
  return (
 <>
    <form className='searchbox' onSubmit={abc}>
       <input type="search" placeholder="search" onChange={(e)=>{setsearchtxt(e.target.value);console.log(searchtxt)}}></input>
    </form>
    <div className="Latest">
    {/* {{ content && content.map((c)=>(
         <Cards key={c.id} id={c.id} poster={c.poster_path} title={c.title} rating={c.vote_average} desc={c.overview} />
      ))
    }} */}
    </div> 
 </>
  
  )
}

export default Search