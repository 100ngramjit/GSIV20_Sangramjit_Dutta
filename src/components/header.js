import React from 'react';
import './style.css';
import Search from "./Search";

function header(props) {
  return (
      <span className='headertp'>
            <Search changeUrl={props.changeUrl}/>
      </span>

  )
}

export default header;