import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import Cards from './Cards'

function Search(props) {
  const [searchtxt,setsearchtxt]=useState("")


  return (
 <>
    <form className='searchbox' onSubmit={(e)=>props.changeUrl(e, searchtxt)}>
       <input type="search" placeholder="search" onChange={(e)=>{setsearchtxt(e.target.value);console.log(searchtxt)}}></input>
    </form>
 </>
  
  )
}

export default Search