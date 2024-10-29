import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

export const http = instance;
