import { ADD_POST, DELETE_POST, GET_POSTS } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    case DELETE_POST:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}
