import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Latest from './components/Latest';
import Details from './components/Details';
import Header from './components/header';
import axios from "axios";

function App() {

    const [url, setUrl ] = useState(`https://api.themoviedb.org/3/movie/upcoming?api_key=2f79f363fb4398298fea2fddf5996e0d&language=en-US&page=1`);

    const changeUrl = (e, value)=>{
        e.preventDefault();
        setUrl(`https://api.themoviedb.org/3/search/movie?api_key=2f79f363fb4398298fea2fddf5996e0d&query=${value}`)
    }       


    const[data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        let abortController;
        const getData = async()=>{
            abortController = new AbortController();
            let signal = abortController.signal;    
            try{
                const response = await axios.get(url, { signal: signal })
                console.log(response.data)
                setData(response.data.results);
                setError(null);
                console.log(data)
            }catch(err){
                setError(err.message);
                setData(null);
            }finally{
                setLoading(false);
            }          
        }
        getData();      
        return () => abortController.abort();
     }, [url])

  return (
    <>
    <BrowserRouter>
    <Header changeUrl={changeUrl}/>
       <div className="App">
        <Routes>
          <Route path="/" element={<Latest data={data}/>} exact />
          <Route path="/details/:id" element={<Details/>} />
        </Routes>
       </div>    
    </BrowserRouter></>
    
    
  );
}

export default App;