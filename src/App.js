import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Latest from './components/Latest';
import Details from './components/Details';
import Header from './components/header';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
       <div className="App">
        <Routes>
          <Route path="/" element={<Latest/>} exact />
          <Route path="/details" element={<Details/>} />
        </Routes>
       </div>    
    </BrowserRouter></>
    
    
  );
}

export default App;
