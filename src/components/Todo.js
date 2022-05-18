import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, getPosts } from "../actions/post.action";
import { updateTodo, completeTodo } from "../services/todoServices";

export default function Todo({ todo, todoId }) {
  const [isCompleted, setIscompleted] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editMess, setEditMess] = useState(null);

  const dispatch = useDispatch();
  const handleDelete = async (todoId) => {
    await dispatch(deletePost(todoId));
    dispatch(getPosts());

    // const response = await deleteTodo(todoId);
    // console.log(response);
  };
  const handleEdit = async (todoId) => {
    setEdit(false);
    if (editMess) {
      const response = await updateTodo(todoId, {
        text: editMess,
      });
      console.log(response);
    }
  };
  const handleComplete = async (todoId) => {
    if (!isCompleted) {
      await completeTodo(todoId, {
        completed: true,
      });
      setIscompleted(true);
    } else {
      await completeTodo(todoId, {
        completed: false,
      });
      setIscompleted(false);
    }
  };
  return (
    <li className={isCompleted ? "list-item complete" : "list-item"}>
      {/* <p>{todo.text}</p> */}
      {edit ? (
        <input
          autoFocus
          type="text"
          defaultValue={editMess ? editMess : todoId}
          className="list-input"
          onChange={(e) => setEditMess(e.target.value)}
        />
      ) : (
        <input
          type="text"
          defaultValue={todo.text}
          className="list"
          // onChange={() => setEditMess()}
        />
      )}
      <div>
        <button
          className="button-complete task-button"
          onClick={() => handleComplete(todoId)}
        >
          <i className="fa fa-check-circle"></i>
        </button>
        {editMess ? (
          <button
            className="button-edit task-button"
            onClick={() => handleEdit(todoId)}
          >
            <i className="fa fa-edit"></i>
          </button>
        ) : (
          <button
            className="button-edit task-button"
            onClick={() => setEdit(!edit)}
          >
            <i className="fa fa-edit"></i>
          </button>
        )}
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
