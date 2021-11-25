import axios from "axios";

export const searchBooks = async (text, start) => {
  const url = "/api/v1/search/book.json";
  const findCount = 56;

  const params = {
    query: text,
    display: findCount,
    start: start * findCount + 1,
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

export const getBooks = async (text, number) => {
  const url = "/api/v1/search/book.json";
  const params = {
    query: text,
    display: number,
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
