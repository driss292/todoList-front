import React from "react";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";
import {
  addTodo,
  // getTodos,
  // updateTodo,
  // deleteTodo,
  // completeTodo,
} from "../services/todoServices";

export default function Form({ input, setInput }) {
  const dispatch = useDispatch();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const data = { text: input, completed: false };
    await dispatch(addPost(data));
    setInput("");
    dispatch(getPosts());
    // try {
    //   console.log(response);
    // } catch (error) {
    //   console.log(error.message);
    // }
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
