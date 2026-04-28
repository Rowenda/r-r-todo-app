import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/api/";
const GET_TODOS_URL = `${BASE_URL}todos`;

export const getTodos = async () => {
  const response = await axios.get(GET_TODOS_URL);
  return response.data;
}
