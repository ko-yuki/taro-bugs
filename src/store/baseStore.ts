import request from "@util/request";

export default class baseStore {
  fetch(data) {
    const { setState, loading: loadingKey = "" } = data;
    if (loadingKey) {
      this[loadingKey] = true;
    }
    return new Promise((resolve, reject) => request(
      {
        baseApi: data.baseApi,
        url: data.url,
        method: data.method || "post",
        data: data.data || {},
        header: data.header,
      }
    )
      .then(res => {
        if (setState) {
          if (typeof this[setState] === "function") {
            this[setState](res)
          }
        }
        if (loadingKey) {
          this[loadingKey] = false;
        }
        resolve(res);
      })
      .catch((err) => {
        if (loadingKey) {
          this[loadingKey] = false;
        }
        reject(err);
      })
    )
  }
}
