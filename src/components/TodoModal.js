import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
 import {v4 as uuid} from 'uuid'
 import { addTodo, updateTodo } from '../slices/todoSlice';
 import toast from 'react-hot-toast' //Alert 

function TodoModal({ modalOpen, setModalOpen }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('daily');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (title && description && status) {
            dispatch(
                addTodo({
                id:uuid(),//unique id üretiyor(uuid)
                title,
                description,
                status,
                time:new Date().toLocaleString(),
            })
            );
            toast.success('Task Added Successfully'); //Alert
            setModalOpen(false); //save tuşuna bastığında modalı kapatıcak.
        }else{
            toast.error("Title shouldn't be empty");
        }
    };
    return (

        modalOpen && ( //Eğer modalopen True ise modal göstericek False ise gösterilmicek.
            <div id="todoFormModal" className="modal">
                <div id="modalBody" className="modal-body">
                    <form>
                        <div className="select">
                            <select
                                name="todos"
                                className="filter-todo"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                    </form>
                    <form id="todoForm" onSubmit={(e) => handleSubmit(e)}>
                        <input id="id" hidden />
                        <input
                            name="title"
                            type="text"
                            className="form-control input"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            name="desc"
                            type="text"
                            className="form-control textarea"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >

                        </textarea>
                        <button
                            className="save-btn"
                            type="submit"
                            >
                            SAVE
                        </button>
                    </form>
                </div>
            </div>
        )

    )
}
export default TodoModal;
