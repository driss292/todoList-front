import React from "react";
import {
  addTodo,
  // getTodos,
  // updateTodo,
  // deleteTodo,
  // completeTodo,
} from "../services/todoServices";

export default function Form({ input, setInput }) {
  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTodo({ text: input, completed: false });
      //   console.log(response);
      setInput("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className="button-add">Add</button>
    </form>
  );
}
