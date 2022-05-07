import React, { useState } from 'react';

import './App.css';
import Tab from './Tab';
import TodoAppBg from './images/bg.jpeg';

//Fontawesome//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



function App() { 
  return (
    <div className="App">
      <div className="container ">
        <div className="header">
          <img src={TodoAppBg} />
          <span className="title">TODO APP</span>
        </div>
        <div className='buttons' >
           <Tab />
        </div> 
          
        <button type="button"
           className="open-modal-btn" 
          
          >
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>


      </div>
    </div>
  );
}

export default App;
