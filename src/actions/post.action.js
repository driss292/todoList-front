import { addTodo, deleteTodo, getTodos } from "../services/todoServices";

export const GET_POSTS = "GET_POSTS";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST = "ADD_POST";
// export const EDIT_POST= "EDIT_POST"

export const getPosts = () => {
  return (dispatch) => {
    return getTodos()
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    return addTodo(data)
      .then((res) => {
        dispatch({ type: ADD_POST, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (todoId) => {
  return (dispatch) => {
    return deleteTodo(todoId)
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { todoId } });
      })
      .catch((err) => console.log(err));
  };
};
