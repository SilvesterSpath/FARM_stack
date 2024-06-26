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
    <div style={{ display: 'flex' }}>
      <h5 style={{ display: 'flex', margin: '5px', alignItems: 'center' }}>
        Title: {props.task.title}
      </h5>
      <p style={{ display: 'flex', margin: '5px', alignItems: 'center' }}>
        Description: {props.task.description}
      </p>
      <button
        className='btn btn-outline-danger my-2 mx-2'
        style={{ borderRadius: '50px', margin: '5px' }}
        onClick={() => deleteTask(props.task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
