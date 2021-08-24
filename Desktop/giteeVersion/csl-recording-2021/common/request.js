import config from "../config/config.json";

const request = (url = "", param = null, method = "GET", header = {}) => {
    url = config.baseUrl + url
    return new Promise((resolve, reject) => {
    uni
      .request({
        url,
        method,
        data: param,
        header: header,
        // dataType: "json",
      })
      .then((response) => {
        setTimeout(function () {
          uni.hideLoading();
        }, 2000);
        let [error, res] = response;
        resolve(res.data);
      })
      .catch((error) => {
        let [err, res] = error;
        reject(err);
      });
  });
};
export default request;
