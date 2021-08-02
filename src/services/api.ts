import axios from "axios";

export const api = axios.create({
  baseURL: 'https://myfinances-web.herokuapp.com/',
})
