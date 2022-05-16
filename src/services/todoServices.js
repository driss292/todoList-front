import axios from "axios";
const apiUrl = "http://localhost:3000/todos";

export function getTodos() {
  return axios.get(apiUrl);
}

export function addTodo(text) {
  return axios.post(apiUrl + "/create", text);
}

export function completeTodo(id, completed) {
  return axios.put(apiUrl + "/complete/" + id, completed);
}

export function updateTodo(id, updated) {
  return axios.put(apiUrl + "/update/" + id, updated);
}

export function deleteTodo(id) {
  return axios.post(apiUrl + "/delete/" + id);
}
