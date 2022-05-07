import React, { useState } from 'react'

function TodoModal({ modalOpen, setModalOpen }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
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
                            onChange={(e)=> setStatus(e.target.value)}
                            >
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                    </form>
                    <form id="todoForm">
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
                        type="button"
                        onSubmit={(e)=>handleSubmit(e)}>
                            SAVE
                        </button>
                    </form>
                </div>
            </div>
        )

    )
}
export default TodoModal;
