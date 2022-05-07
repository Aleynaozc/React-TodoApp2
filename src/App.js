import React, { useState } from 'react';
import './App.css';
import Tab from './Tab';
import TodoModal from './components/TodoModal';
import { Toaster } from 'react-hot-toast';
import TodoAppBg from './images/bg.jpeg';
//Fontawesome//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="App">
        <div className="container ">
          <div className="header">
            <img src={TodoAppBg} />
            <span className="title">TODO APP</span>
          </div>
          <div className='buttons' >
            <Tab />
          </div>

          <button type="button" onClick={() => setModalOpen(true)} //Buttona basıldığında modal açılıyor.
            className="open-modal-btn"

          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>

          <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <Toaster toastOptions={{
            // Define default options
            className: 'toaster-pos',
          }} />
        </div>

      </div>

    </>
  );
}

export default App;
