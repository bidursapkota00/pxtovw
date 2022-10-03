import axios from "axios";

export const requestGetTags = () => {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
  });
};
