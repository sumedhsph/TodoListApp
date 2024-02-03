import axios from "axios";

const customFetch = axios.create({
  beseURL: "http://localhost:4000/api/todos"
});

export default customFetch;
