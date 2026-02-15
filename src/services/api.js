import axios from "axios";

const api = axios.create({
  // Replace with the ACTUAL IP of your backend machine
  baseURL: "http://192.168.1.15:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
