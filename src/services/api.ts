import axios from "axios";

export const api = axios.create({
  baseURL: "https://discord.com/api",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
