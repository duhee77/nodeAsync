const axios = require("axios");

const URL = "";

const header = {
  Authorization: "",
};

const datas = [{}];

const instance = axios.create({
  baseURL: URL,
  headers: header,
});

const result = [];

const getRequest = async (data, index) => {
  await instance
    .post("/idcard", data)
    .then(function (response) {
      const res = { request_num: index, ...response.data };
      result.push(res);
    })
    .catch(function (error) {
      const res = { request_num: index, ...error.response.data };
      result.push(res);
    });
};

const getResult = async () => {
  await Promise.all(
    datas.map(async (data, index) => {
      const response = await getRequest(data, index);
    })
  );
};

const print = async () => {
  await getResult();
  console.log(result);
};

print();
