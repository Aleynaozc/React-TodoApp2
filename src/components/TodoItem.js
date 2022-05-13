import React, { useState } from 'react'
import { format } from 'date-fns';
//Fontawesome//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import toast from 'react-hot-toast';
import TodoModal from './TodoModal';

function TodoItem({ todo }) {
  const dispatch = useDispatch(); //todoSlice'daki actionları çalıştırmak için kullanılır.
  const [UpdateModalOpen, setUpdateModalOpen] = useState(false);
  
  const [checked, setChecked] = useState(false); 
  
  const checkedText = () => { //Checkbox tıklandığında title'ın üstü çizilir.
    
    setChecked(!checked); 
    setUpdateModalOpen(false);
  }; 
  const handlerDelete = () => {
    dispatch(deleteTodo(todo.id));//todoSlice'da yaratılan action'ı kullanıp silme işlemini yapıyoruz.
    toast.success('Todo Deleted Successfully')
  }
  const handlerUpdate = () => {
    setUpdateModalOpen(true);
  }


  return (
    <>
      <li className="todo-item">
        <div>
          <input className="todo-item-check" type='checkbox' onChange={checkedText} />
        </div>
        <div className="todo-item-details">
          <span className={`todo-item-title ${checked? "completed": ""}`} >{todo.title} </span>
          <span className="todo-item-desc">{todo.description}</span>
          <p className="todo-item-time"> {format(new Date(), 'dd/MM/yyyy,p')}</p>
        </div>
        <button className="delete-btn" type="button" onClick={handlerUpdate}>
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
        </button>
        <button className="delete-btn" type="button" onClick={handlerDelete}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </li>
      <TodoModal
        type='update'
        modalOpen={UpdateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo} //Update ederken title desc ve status de eski bilgileri görebilmek için yazıyoruz.
      />
    </>
  )
}
export default TodoItem;
