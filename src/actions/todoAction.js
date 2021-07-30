import axios from 'axios';
import * as type from '../constants/actionType';

export function addTask(task) {
    return {
        type: type.ADD_TASK,
        task
    };
}

export function deleteTask(id) {
    return {
        type: type.DELETE_TASK,
        id
    }
}

export function fetchInfoSuccess(data) {
    return {
        type: type.GET_INTO,
        data
    }
}


// demo redux thunk
export function fetchInfo() {
    return async (dispatch, getState) => {
        await axios.get('https://jsonplaceholder.typicode.com/users/1')
                .then(response => dispatch(fetchInfoSuccess(response.data)))

    }
}