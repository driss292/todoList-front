import React from "react";
import {
  // addTodo,
  // getTodos,
  updateTodo,
  deleteTodo,
  completeTodo,
} from "../services/todoServices";

export default function Todo({ todo, todoId, complete }) {
  //   console.log(todoId);
  //   console.log(todo.text);
  //   console.log(todo.completed);
  // console.log(complete);
  const handleDelete = async (todoId) => {
    const response = await deleteTodo(todoId);
    console.log(response);
  };
  const handleEdit = async (todoId) => {
    const response = await updateTodo(todoId, { text: todo.text });
    console.log(response);
  };
  const handleComplete = async (todoId, todo) => {
    // const completed = todo.completed;
    const response = await completeTodo(todoId, { completed: true });
    console.log(response);
  };
  return (
    <li className="list-item">
      <input
        type="text"
        defaultValue={todo.text}
        className="list"
        onChange={(e) => e.preventDefault()}
      />
      <div>
        <button
          className="button-complete task-button"
          onClick={() => handleComplete(todoId)}
        >
          <i className="fa fa-check-circle"></i>
        </button>
        <button
          className="button-edit task-button"
          onClick={() => handleEdit(todoId)}
        >
          <i className="fa fa-edit"></i>
        </button>
        <button
          className="button-delete task-button"
          onClick={() => handleDelete(todoId)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
