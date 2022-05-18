import {
  ADD_POST,
  COMPLETE_POST,
  DELETE_POST,
  GET_POSTS,
} from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    case COMPLETE_POST:
      return state.map((todo) => {
        if (todo._id === action.payload._id) {
          return {
            ...todo,
            completed: action.payload.completed,
          };
        } else {
          return todo;
        }
      });
    case DELETE_POST:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}
