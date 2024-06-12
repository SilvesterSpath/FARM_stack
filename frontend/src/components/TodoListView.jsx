import React from 'react';
import TaskItem from './TaskItem';

const TodoListView = (props) => {
  return (
    <div>
      <ul>
        {props.todoList.length > 0
          ? props.todoList.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                taskDelete={props.handleTaskDelete}
              />
            ))
          : 'No Tasks'}
      </ul>
    </div>
  );
};

export default TodoListView;
