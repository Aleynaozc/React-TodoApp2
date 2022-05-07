import React from 'react'
import { format } from 'date-fns';
//IMAGE//
import CheckedImg from './image/checked.jpg';
//Fontawesome//
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faTrash} from '@fortawesome/free-solid-svg-icons';
function TodoItem({todo}) {
  return (
    <li className="todo-item">
  <div className={`todo-item-check ${todo.completed ? " complete-item-check  ": ""}`}>
    
    <img src={CheckedImg} />
    
  </div>
  <div className="todo-item-details">
    <span className={`todo-item-title ${todo.completed ? "completed": ""}`}>{todo.title}</span>
    <span className="todo-item-desc">{todo.description}</span>
    <p className="todo-item-time">
    {format(new Date(todo.time), 'p, MM/dd/yyyy')}
    </p>
  </div>
  <button  className="delete-btn"type="button" >
  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
  </button>
</li>
  )
}

export default TodoItem