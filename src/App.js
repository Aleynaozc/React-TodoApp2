import React, { useState } from 'react';

import './App.css';
import Tab from './Tab';
import TodoModal from './components/TodoModal';
import TodoAppBg from './images/bg.jpeg';

//Fontawesome//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



function App() { 
  const[modelOpen,setModelOpen] = useState(true);
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
      <TodoModal modalOpen={modelOpen} setModelOpen={setModelOpen}/>
    </div>
  );
}

export default App;
