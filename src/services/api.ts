import axios from "axios";

export const api = axios.create({
  baseURL: 'https://myfinances-web.herokuapp.com/',
  headers:{
    'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTAwMjgwYWFiY2NjMjI1Y2M3YjM2OWIiLCJ1c2VyRW1haWwiOiJyYWZhbWlyYTY3NUBnbWFpbC5jb20iLCJ1c2VyTmFtZSI6IlJhZmFlbCBBbmRyYWRlIE1pcmFwYWxoZXRhIiwiaWF0IjoxNjI3NTY5OTYyLCJleHAiOjE2MjgxNzQ3NjJ9.ygUx0neHDrpJEYtxQwVHarOAJYbKPgHIe02kM6dbTD4`
  }
})
