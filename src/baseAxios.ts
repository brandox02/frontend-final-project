import axios from 'axios'

const f = axios.create({
   baseURL: 'https://amadisfinal.azurewebsites.net/', headers:
      { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImJyYW5kb3hAZXhhbXBsZS5jb20iLCJleHAiOjE2NjE1NjIwNzF9.EAqArNXKhbcydQel82L30e5rQbkf4Lc0SqIb1xkUwC8` }
})
export default f
