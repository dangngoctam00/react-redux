import * as type from '../constants/actionType';

const initialState = { 
    tasks: [
        {id: 0, task: '👋 Do exercise'},
        {id: 1, task: '👋 Learn docker'}
    ]
};

function getMaxId({tasks}) {
    console.log(tasks);
    let max = tasks.reduce((maxId, task) => Math.max(maxId, task.id), -1);
    return max + 1;
}

function taskReducer(state = initialState, action) {    
    switch (action.type) {
        case type.ADD_TASK:
            {
                let task = {
                    task: "👋 " + action.task,
                    id: getMaxId(state)
                }                
                return {
                    tasks: [...state.tasks, task]
                };
            }
        case type.DELETE_TASK:
            {
                return {
                    tasks: state.tasks.filter(task => task.id !== action.id)
                };
            }
        case type.GET_INTO:
            {
                return {
                    ...state,
                    info: action.data
                }
            }
        default:
            return state;
    }
}

export default taskReducer;