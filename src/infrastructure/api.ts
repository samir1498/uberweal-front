// src/infrastructure/api.ts

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1", // Replace with your actual API base URL
  timeout: 10000, // Adjust timeout as needed
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export default instance;
