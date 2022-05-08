
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
 import {v4 as uuid} from 'uuid'
 import { addTodo, updateTodo } from '../slices/todoSlice';
 import toast from 'react-hot-toast' //Alert 

function TodoModal({ type,modalOpen, setModalOpen }) {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('daily');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      
        e.preventDefault();
        if(title === ''){
            toast.error('Please enter a title.')
            return;
        }
        
        
        if (title  && status) { //If içine Description yazmıyoruz.Çünkü description boş kaydedilebilir.
            dispatch //Burada State'i nasıl değiştiriceğimizi store'a bildiriyoruz.
            ( 
                addTodo({
                id:uuid(),//unique id üretiyor(uuid)
                title,
                complated:false,
                description, // Kaydedilen note içinde description'nın gözükebilmesi için buraya description tanımlıyoruz.
                status,
                time:new Date().toLocaleString(),
            })
            );
            toast.success('Task Added Successfully'); //Alert
            setModalOpen(false); //save tuşuna bastığında modalı kapatıcak.
        }else if (title === '') //Title boş bırakılıp kaydedilmeye çalışıldığında alttaki uyarı çıkacak.
        {
            toast.error("Title shouldn't be empty"); 
        }
    };
    return (

        modalOpen && ( //Eğer modalopen True ise modal göstericek , False ise gösterilmicek.
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
                                {type==='update' ? 'UPDATE' : 'SAVE'}
                        
                        </button>
                    </form>
                </div>
            </div>
        )

    )
}
export default TodoModal;
