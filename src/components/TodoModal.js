
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'
import { addTodo, updateTodo } from '../slices/todoSlice';
import toast from 'react-hot-toast' //Alert 
import {  faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
   
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        if (type === 'update' && todo) {
            setTitle(todo.title);
            setDescription(todo.description);
            setStatus(todo.status);
        } else {
            setTitle('');
            setDescription('');
            setStatus('daily');
        }
    }, [type, todo, modalOpen]);


    const handleSubmit = (e) => {

        e.preventDefault();
        if (title === '') {
            toast.error('Please enter a title.')
            return;
        }


        if (title && status) //If içine Description yazmıyoruz.Çünkü description boş kaydedilebilir.
        {
            if (type === 'save') {
                dispatch //Burada State'i nasıl değiştiriceğimizi store'a bildiriyoruz.
                    (
                        addTodo({
                            id: uuid(),//unique id üretiyor(uuid)
                            title,
                            completed: false,
                            description, // Kaydedilen note içinde description'nın gözükebilmesi için buraya description tanımlıyoruz.
                            status,
                            time: new Date().toLocaleString(),
                        })
                    );
                toast.success('Task Added Successfully'); //Alert
                setModalOpen(false); //save tuşuna bastığında modalı kapatıcak.
            }

            if (type === 'update') {
                if (todo.title !== title || todo.description !== description || todo.status !== status) {
                    dispatch(updateTodo({
                        ...todo,   //Eski todo'yu alarak eski propların (title,desc,status) bilgilerinin üzerine yeni prop bilgilerini yazar.
                        title,
                        description,
                        status
                    }));
                    toast.success('Task Updated successfully');
                } else {
                    toast.error('No changes made');
                    return;
                }
            }
            setModalOpen(false);
           
        }

    };
    return (

        modalOpen && ( //Eğer modalopen True ise modal göstericek , False ise gösterilmicek.
            <div id="todoFormModal" className="modal">
                  
                <div id="modalBody" className="modal-body">
                <button className='close-btn' type="button" onClick={() => setModalOpen(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                        </button>
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
                            autoComplete="off"
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
                            {type === 'update' ? 'UPDATE' : 'SAVE'}

                        </button>
                    </form>
                  
                </div>
            </div>
        )

    )
}
export default TodoModal;
