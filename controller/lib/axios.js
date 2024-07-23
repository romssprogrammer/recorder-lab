const { default: axios } = require("axios");

// const TOKEN_BOT = "7402820185:AAFXAVg-pcdZlukxN7yczzBC-FU_G2YnyIY";
const BASE_URL = `https://api.telegram.org/bot${TOKEN_BOT}`;

export function getAxiosInstance() {
  return {
    get(method, params) {
      return axios.get(`/${method}`, {
        baseURL: BASE_URL,
        params,
      });
    },
    post(method, data) {
      return axios({
        method: "post",
        baseURL: BASE_URL,
        url: `/${method}`,
        data,
      });
    },
  };
}

module.exports = { axiosInstance: getAxiosInstance };
