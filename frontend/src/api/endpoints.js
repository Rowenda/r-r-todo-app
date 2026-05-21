import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/api/";
const GET_TODOS_URL = `${BASE_URL}todos`;
const CREATE_TODO_URL = `${BASE_URL}todos`;
const DELETE_TODO_URL = (id) => `${BASE_URL}todos/${id}`;
const UPDATE_TODO_URL = (id) => `${BASE_URL}todos/${id}/update_completed`;

export const getTodos = async () => {
  const response = await axios.get(GET_TODOS_URL);
  return response.data;
}

export const createTodo = async (todo_name) => {
  const response = await axios.post(CREATE_TODO_URL, { 'todo_name': todo_name, 'completed': false });
  return response.data;
}

export const delete_todo = async (id) => {
  const response = await axios.delete(DELETE_TODO_URL(id));
  return response.data;
}

export const update_todo = async (id, completed) => {
  const response = await axios.patch(UPDATE_TODO_URL(id), { 'completed': completed });
  return response.data;
}
