import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { updateFilterStatus } from "./slices/todoSlice";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const filterStatus = useSelector(state => state.todo.filterStatus);

  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value))
  }
  const toggleTab = (index) => {
    setToggleState(index);

  };

  return (
    <div className="container-tab">
      <div className="bloc-tabs" value={filterStatus} onClick={updateFilter}>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)} value='daily'
        >
          Daily
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"} value='weekly'
          onClick={() => toggleTab(2)}
        >
          Weekly
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"} value='yearly'

          onClick={() => toggleTab(3)}
        >
          Yearly
        </button>
      </div>

      <div className="content-tabs">

        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >

        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >


        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >


        </div>
      </div>
    </div>
  );
}
export default Tabs;