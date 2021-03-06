import React, { useState } from 'react';
import './App.scss';
import Tab from './Tab';
import TodoListContainer from './components/TodoList';
import TodoModal from './components/TodoModal';
//Alert
import { Toaster } from 'react-hot-toast';
//Image

//Fontawesome//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <>
      <div className="App">
        <div className="container ">
          <div className="header">
            <img src="/image/bg.jpeg"  alt="header-background"  />
            <span className="title">TODO APP</span>
          </div>
          <div className='buttons' >
            <Tab />
          </div>
          <TodoListContainer
          />
          <button type="button" onClick={() => setModalOpen(true)} //Buttona basıldığında modal açılıyor.
            className="open-modal-btn"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <TodoModal type="save" modalOpen={modalOpen} setModalOpen={setModalOpen}  />
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