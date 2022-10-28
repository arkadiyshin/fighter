import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();


const api = axios.create({
    baseURL: process.env.BASE_API_URL ?? "http://localhost:5000",
});

export default api;
