import './App.css';
import taskReducer from './reducers/todoReducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ListTasks from './components/ListTasks';
import AddTask from './components/AddTask';
import thunk from 'redux-thunk';
import UserInfo from './components/UserInfo';

let store = createStore(taskReducer, applyMiddleware(thunk));


function App() {
  return (
    <div className="container">
      <Provider store = {store}>
        <AddTask></AddTask>
        <ListTasks></ListTasks>
        <UserInfo></UserInfo>
      </Provider>
    </div>
  );
}

export default App;
