import React from 'react'

function UpdateModal(UpdateModalOpen, setUpdateModalOpen ,todo ) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
  return (
    UpdateModalOpen && ( //Eğer modalopen True ise modal göstericek , False ise gösterilmicek.
            <div id="todoFormModal" className="edit-modal">
                  
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
                         Update

                        </button>
                    </form>
                  
                </div>
            </div>
        )
  )
}

export default UpdateModal