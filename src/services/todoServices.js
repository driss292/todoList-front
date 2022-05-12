import axios from "axios";
const apiUrl = "http://localhost:3000/todos";

export function getTodos() {
  return axios.get(apiUrl);
}

export function addTodo(todo) {
  return axios.post(apiUrl + "/create", todo);
}

export function completeTodo(id) {
  return axios.put(apiUrl + "/complete/" + id);
}

export function updateTodo(id, todo) {
  return axios.put(apiUrl + "/update/" + id, todo);
}

export function deleteTodo(id) {
  return axios.post(apiUrl + "/delete/" + id);
}
