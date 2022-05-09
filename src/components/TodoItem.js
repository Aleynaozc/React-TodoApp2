import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';

//Fontawesome//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import toast from 'react-hot-toast';

function TodoItem({ todo, handlerUpdate }) {
  const dispatch = useDispatch(); //todoSlice'daki actionları çalıştırmak için kullanılır.

  const handlerDelete = () => {
    dispatch(deleteTodo(todo.id));//todoSlice'da yaratılan action'ı kullanıp silme işlemini yapıyoruz.
    toast.success('Todo Deleted Successfully')
  }

  return (
    <>
      <li className="todo-item">
        <div>
          <input className="todo-item-check" type='checkbox' />
        </div>
        <div className="todo-item-details">
          <span className="todo-item-title ">{todo.title} </span>
          <span className="todo-item-desc">{todo.description}</span>
          <span className="todo-item-time"> {format(new Date(todo.time), 'p, MM/dd/yyyy')}</span>
        </div>
        <button className="delete-btn" type="button" onClick={handlerUpdate}>
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
        </button>
        <button className="delete-btn" type="button" onClick={handlerDelete}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </li>
    </>
  )
}

export default TodoItem