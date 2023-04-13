import axios from "axios";

const requestAxios = axios.create({
  baseURL: "https://api.mymemories.uz/api/v1",
});

export { requestAxios };
