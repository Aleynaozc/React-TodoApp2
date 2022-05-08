import React, {useEffect, useState} from 'react'
import { format } from 'date-fns';

//Fontawesome//
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import toast from 'react-hot-toast';
import TodoModal from './TodoModal';
import CheckButton from './CheckButton';


function TodoItem({todo}) {

  const dispatch=useDispatch(); //todoSlice'daki actionları çalıştırmak için kullanılır.
const[period,setPeriod]=useState(false);
  const[UpdateModalOpen,setUpdateModalOpen]=useState(false);

  useEffect(()=>{
    if(todo.status === 'daily'){
      setPeriod(true);
    }else {
      setPeriod(false);
    }
  },[todo.status])
  const handlerDelete=()=>{
    dispatch(deleteTodo(todo.id));//todoSlice'da yaratılan action'ı kullanıp silme işlemini yapıyoruz.
    toast.success('Todo Deleted Successfully')
  }

  const handlerUpdate=()=>
  {
    setUpdateModalOpen(true);
  }
  return (
    <>
 
    <div className="todo-item">
  <div className="todo-item-check">
    <CheckButton/>
    
    
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
<TodoModal 
type='update' 
modalOpen={UpdateModalOpen} 
setModalOpen={setUpdateModalOpen}
todo={todo} //Update ederken title desc ve status de eski bilgileri görebilmek için yazıyoruz.
/>
</>
  )
}

export default TodoItem