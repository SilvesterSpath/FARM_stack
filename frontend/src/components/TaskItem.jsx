import React from 'react';

const TaskItem = (props) => {
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/todo/${id}`, {
        method: 'DELETE',
      });
      await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      props.taskDelete(id);
    }
  };
  return (
    <div>
      <h5>Title: {props.task.title}</h5>
      <p>Description: {props.task.description}</p>
      <button
        className='btn btn-outline-danger my-2 mx-2'
        style={{ borderRadius: '50px' }}
        onClick={() => deleteTask(props.task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
