import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";


function TodoListContainer() {
    const filterStatus = useSelector((state) => state.todo.filterStatus);
    const todoList = useSelector((state) => state.todo.todoList);
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
    const filteredTodoList = sortedTodoList.filter(item => {
        if (item.status == filterStatus) {
            return true;
        }
        return item.status == filterStatus;
    })

    return <ul id="todoItems" className="todos">
        {filteredTodoList && filteredTodoList.length > 0
            ? filteredTodoList.map((todo) => 
            <TodoItem
                todo={todo}
                key={todo.id}
                completed={todo.completed}

            />)

            : ' ~Add New Todo~'
        }
        </ul>
    }
 export default TodoListContainer;