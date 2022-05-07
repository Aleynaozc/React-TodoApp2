import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoListContainer() {
    const todoList = useSelector((state)=> state.todo.todoList);
    const sortedTodoList=[...todoList];
    sortedTodoList.sort((a,b)=> new Date(b.time)-new Date(a.time));
    return <ul id="todoItems" className="todos"> 
    {sortedTodoList && sortedTodoList.length > 0 
        ? sortedTodoList.map((todo) => <TodoItem 
        todo={todo} 
        key={todo.id}/>) 
        
        : 'no todo found'
    }
    
    </ul>;



}
export default TodoListContainer;