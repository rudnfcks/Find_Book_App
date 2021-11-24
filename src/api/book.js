import axios from "axios";

export const searchBooks = async (text, start) => {
  const url = "/api/v1/search/book.json";
  const params = {
    query: text,
    display: 20,
    start: start * 20,
  };
  const headers = {
    "X-Naver-Client-Id": "8hs6a6xFMe0P_KWA_XvR",
    "X-Naver-Client-Secret": "w50ROr1lq6",
  };

  const {
    data: { items },
  } = await axios.get(url, { params: params, headers: headers });

  console.log(items);
};

export const getBooks = async (text) => {
  const url = "/api/v1/search/book.json";
  const params = {
    query: text,
    display: 10,
  };
  const headers = {
    "X-Naver-Client-Id": "8hs6a6xFMe0P_KWA_XvR",
    "X-Naver-Client-Secret": "w50ROr1lq6",
  };

  const {
    data: { items },
  } = await axios.get(url, { params: params, headers: headers });

  return items;
};
