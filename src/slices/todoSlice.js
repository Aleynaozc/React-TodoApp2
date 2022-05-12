import { createSlice } from '@reduxjs/toolkit'

const getInitialTodo = () => {
    const localTodoList = window.localStorage.getItem('todoList');
    if (localTodoList) {
        return JSON.parse(localTodoList) //JS biçimine dönüştürme
    }
    window.localStorage.setItem(
        'todoList',
        JSON.stringify([])); // string olarak yazdırma.
    return [];
};



const initialValue = {
    filterStatus: 'daily',
    todoList: getInitialTodo(),
};

export const todoSlice = createSlice( //Burada Yapılacak Actionlar yaratılıyor.(Delete,Update vs.)
    {
        name: 'todo', //reducer ismi

        initialState: initialValue, //başlangıç state'i

        //State=bileşenlerin özellikleri ve bilgileridir. Action=değişecek state bilgisi(type) ve payload taşır.

        reducers:  // Type 'a göre state değiştirir ve yeni state yaratır. 
        {
            addTodo: (state, action) => {
                state.todoList.push(action.payload);
                const todoList = window.localStorage.getItem('todoList');
                if (todoList) {
                    const todoListArr = JSON.parse(todoList);
                    todoListArr.push({
                        ...action.payload,
                    });
                    window.localStorage.setItem('todoList',
                        JSON.stringify(todoListArr))
                } else {
                    window.localStorage.setItem(
                        'todoList',
                        JSON.stringify([{ ...action.payload }]))
                }
            },
            deleteTodo: (state, action) => {
                const todoList = window.localStorage.getItem('todoList');
                if (todoList) {
                    const todoListArr = JSON.parse(todoList);//Js biçimine dönüştü ve TodoListArr'e atandı.
                    todoListArr.forEach((todo, index) => {
                        if (todo.id === action.payload) //Todo id ile payload propları eşitlenirse;
                        {
                            todoListArr.splice(index, 1); // İndexten ne kadar çıkarmak istiyorsak onu belirtiyoruz.
                        }
                    });
                    window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
                    state.todoList = todoListArr;
                }

            },
            //Update ToDo Reducer
            updateTodo: (state, action) => {
                const todoList = window.localStorage.getItem('todoList') //burada TodoList öğesini aldık.
                    ;
                if (todoList) {
                    const todoListArr = JSON.parse(todoList);//stringden object'e çevirdik.

                    todoListArr.forEach((todo, index) => {
                        //payload 'da title description vs propları olduğu için eşitleyeceğimiz özelliği(id)'yi belirtmemiz gerekiyor.
                        if (todo.id === action.payload.id)
                        //Todo id ile payload id eşleşirse;
                        { //Update edilecek propertiesleri tanımlıyoruz.
                            todo.status = action.payload.status;
                            todo.title = action.payload.title;
                            todo.description = action.payload.description;
                        }
                    });
                    //Local Storage'de Todo list'i burada tekrar ayarlıyoruz. 
                    window.localStorage.setItem('todoList', JSON.stringify
                        (todoListArr));

                    state.todoList = todoListArr; //state'i  update ediyoruz.
                }
            },
            updateFilterStatus: (state, action) => {
                state.filterStatus = action.payload;
            },

            
        },

    });
export const { addTodo, deleteTodo, updateTodo, updateFilterStatus} = todoSlice.actions;
export default todoSlice.reducer;
