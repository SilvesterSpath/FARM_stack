import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <h5>Title: {task.title}</h5>
      <p>Description: {task.description}</p>
    </div>
  );
};

export default Task;
