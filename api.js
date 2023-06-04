import axios from "axios";

const api = axios.create({
    baseURL: "https://simple-personal-site-api-nlov.onrender.com/api",
});

export default api;
