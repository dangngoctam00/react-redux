import { useState } from "react";
import { connect } from "react-redux";
import * as action from "../actions/todoAction";
import "./AddTask.css";

function AddTask(props) {
    let [task, updateTask] = useState('');

    let clickHandler = (task) => {
        updateTask('');
        props.addTask(task);
    };

    return (
        <div>
            <input 
                type="text" 
                value={task}
                onChange={e => updateTask(e.target.value)}
            />
            <button className="addtask-btn" onClick={() => clickHandler(task)}>
                Add
            </button>

            <button className="addtask-btn" onClick={() => props.fetchInfo()}>Get info</button>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        addTask: (task) => dispatch(action.addTask(task)),
        fetchInfo: () => dispatch(action.fetchInfo())
    }
}

export default connect(null, mapDispatchToProps)(AddTask);