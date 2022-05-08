import React, {useState} from 'react'
import { format } from 'date-fns';
//IMAGE//
import CheckedImg from './image/checked.jpg';
//Fontawesome//
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import toast from 'react-hot-toast';
import TodoModal from './TodoModal';


function TodoItem({todo}) {

  const dispatch=useDispatch();

  const[modalOpen,setModalOpen]=useState(false);

  const handlerDelete=()=>{
    dispatch(deleteTodo(todo.id));//Storage'den çekiyoruz.
    toast.success('Todo Deleted Successfully')
  }

  const handlerUpdate=()=>{
    setModalOpen(true);
  }
  return (
    <>
 
    <div className="todo-item">
  <div className={`todo-item-check ${todo.completed ? " complete-item-check  ": ""}`}>
    
    <img src={CheckedImg} />
    
  </div>
  <div className="todo-item-details">
    <span className={`todo-item-title ${todo.completed ? "completed": ""}`}>{todo.title} </span>
    <span className="todo-item-desc">{todo.description}</span>
    <span className="todo-item-time"> {format(new Date(todo.time), 'p, MM/dd/yyyy')}</span> 
  </div>
  <button  className="delete-btn"type="button" onClick={handlerUpdate}>
  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
  </button>
  <button  className="delete-btn"type="button"  onClick={handlerDelete}>
  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
  </button>
  
</div>
<TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
</>
  )
}

export default TodoItem