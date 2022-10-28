import axios from "axios";

console.log(`env` , process.env.REACT_APP_API_URL)

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL ?? "http://localhost:4000",
});

export default api;
