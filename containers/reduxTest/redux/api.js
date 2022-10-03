import axios from "axios";

export const requestTestData = (payload) => {
    return axios.request({
        method: "get",
        url: "https://api.mcqhall.com/api/v2/halls",
    })
}