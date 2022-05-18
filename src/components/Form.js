import React from "react";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";

export default function Form({ input, setInput }) {
  const dispatch = useDispatch();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const data = { text: input, completed: false };
    await dispatch(addPost(data));
    setInput("");
    dispatch(getPosts());
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
