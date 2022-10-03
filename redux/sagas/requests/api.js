import axios from "axios";

export const requestGetTestApi = (payload) => {
  return axios.request({
    method: "get",
    url: `https://api.mcqhall.com/api/v1/mcqs`,
  });
};
