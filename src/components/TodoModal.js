import React from 'react'

 function TodoModal({modelOpen,setModalOpen}) {
  return (
      <div>
      {modelOpen && ( //Eğer modalopen True ise modal göstericek False ise gösterilmicek.
    <div id="todoFormModal" className="modal">
    <div id="modalBody" className="modal-body">
            <form>
            <div className="select">
        <select  name="todos" className="filter-todo">
         <option value="daily">Daily</option>
           <option value="weekly">Weekly</option>
             <option value="yearly">Yearly</option>
        </select>
         </div>
            </form>
        <form id="todoForm">
            <input id="id" hidden />
            <input name="title" type="text" className="form-control input" placeholder="Title" />
            <textarea name="desc"  type="text" className="form-control textarea" placeholder="Description"></textarea>
            <button  className="save-btn" type="button">
                SAVE
            </button>
        </form>
    </div>
</div>
)}
</div>
  )
}
export default TodoModal;
