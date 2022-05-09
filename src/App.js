import React, { useState } from 'react';
import './App.css';
import Tab from './Tab';
import TodoListContainer from './components/TodoList';
import TodoModal from './components/TodoModal';
//Alert
import { Toaster } from 'react-hot-toast';
//Image
import TodoAppBg from './images/bg.jpeg';
//Fontawesome//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import todo from './components/TodoModal'

function App() {
  
  const [modalOpen, setModalOpen] = useState(false);
 
  const [UpdateModalOpen, setUpdateModalOpen] = useState(false);

  const handlerUpdate = () => {
    setUpdateModalOpen(true);

    
  }

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

          <TodoListContainer handlerUpdate={handlerUpdate}
          />
          <button type="button" onClick={() => setModalOpen(true)} //Buttona basıldığında modal açılıyor.
            className="open-modal-btn"

          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>

          <TodoModal type="save" modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <Toaster toastOptions={{
            // Define default options
            className: 'toaster-pos',
          }} />
        </div>

      </div>
      <TodoModal
        type='update'
        modalOpen={UpdateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo} //Update ederken title desc ve status de eski bilgileri görebilmek için yazıyoruz.
      />
    </>
  );
}

export default App;
