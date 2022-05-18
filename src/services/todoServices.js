import axios from "axios";
const apiUrl = "http://localhost:3000";
// "https://dk-todo-list-api.herokuapp.com";
export function getTodos() {
  return axios.get(apiUrl + "/todos");
}

export function addTodo(text) {
  return axios.post(apiUrl + "/todos/create", text);
}

export function completeTodo(id, completed) {
  return axios.put(apiUrl + "/todos/complete/" + id, completed);
}

export function updateTodo(id, updated) {
  return axios.put(apiUrl + "/todos/update/" + id, updated);
}

export function deleteTodo(id) {
  return axios.post(apiUrl + "/todos/delete/" + id);
}
