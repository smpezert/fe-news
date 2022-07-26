import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://sobe-news.herokuapp.com/api",
});
