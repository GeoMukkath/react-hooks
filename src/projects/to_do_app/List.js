import React from "react";

const List = (props) => {
  const deleteTask = (id) => {
    const newTodoList = props.todos.filter((task) => {
      return task.id !== id;
    });
    props.tsks(newTodoList);
  };
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.task} <button onClick={() => deleteTask(todo.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
