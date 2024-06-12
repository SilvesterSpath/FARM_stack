import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';

function App() {
  const [todoList, setTodoList] = useState([{}]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch('http://localhost:8000/api/todo');
      const data = await response.json();
      console.log(data);
      setTodoList(data);
    };
    getTodos();
  }, []);

  return (
    <div className='App'>
      <div
        className='App list-group-item justify-content-center align-items-center mx-auto'
        style={{
          width: '400px',
          backgroundColor: 'white',
          marginTop: '15px',
          padding: '10px',
          borderRadius: '3px',
        }}
      >
        <h1
          className='card text-white bg-primary mb-1'
          styleName='max-width: 20rem'
        >
          Task Manager{' '}
        </h1>
        <h6 className='card text-white bg-primary mb-3'>
          FASTAPI - React - MongoDB
        </h6>
        <div className='card-body'>
          <h5 className='card text-white bg-dark mb-3'>Add Your Task</h5>
          <span className='card-text'>
            <input
              type='text'
              className='mb-2 form-control titleIn'
              placeholder='Title'
            />
            <input
              type='text'
              className='mb-2 form-control desIn'
              placeholder='Description'
            />
            <button
              className='btn btn-outline-primary mx-2 mb-4'
              style={{ borderRadius: '50px', 'font-weight': 'bold' }}
            >
              Add Task
            </button>
          </span>
          <h5 className='card text-white bg-dark mb-3'>List of Tasks</h5>
          <div>
            {todoList.length > 0
              ? todoList.map((task) => <Task key={task.id} task={task} />)
              : 'No Tasks'}
          </div>
        </div>
        <h6 className='card text-dark bg-warning py-1 mb-0'>
          Copyright 2024, All right reserved &copy;
        </h6>
      </div>
    </div>
  );
}

export default App;
