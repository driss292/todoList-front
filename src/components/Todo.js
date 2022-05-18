import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completePost,
  deletePost,
  editPost,
  getPosts,
} from "../actions/post.action";
import { updateTodo } from "../services/todoServices";

export default function Todo({ todo, todoId }) {
  // const status = useSelector((state) => state.postReducer);
  const [isCompleted, setIscompleted] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editMess, setEditMess] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = async (todoId) => {
    await dispatch(deletePost(todoId));
    dispatch(getPosts());
  };
  const handleEdit = async (todoId) => {
    if (editMess) {
      await dispatch(
        editPost(todoId, {
          text: editMess,
        })
      );
      dispatch(getPosts());

      setEdit(false);
      // console.log(response);
    }
  };
  const handleComplete = async (todoId) => {
    if (isCompleted) {
      await dispatch(
        completePost(todoId, {
          completed: true,
        })
      );
      dispatch(getPosts());
      setIscompleted(false);
    } else {
      await dispatch(
        completePost(todoId, {
          completed: false,
        })
      );
      dispatch(getPosts());
      setIscompleted(true);
    }
  };
  return (
    <li
      className={todo.completed === false ? "list-item" : "list-item complete"}
    >
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
