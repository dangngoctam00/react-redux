import { connect } from "react-redux";
import * as action from "../actions/todoAction";
import "./ListTasks.css"

function ListTasks(props) {
    return (
        <div>
            <ul className="list-tasks">
                {
                    props.tasks.map((task, index) => <li key={index}>
                        {task.task}
                        <button className="deletetask-btn" onClick={() => props.deleteTask(task.id)}>X</button>
                        </li>)
                }
            </ul>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTask: (id) => dispatch(action.deleteTask(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTasks);