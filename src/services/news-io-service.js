"use strict";

const axios = require("axios");

exports.getNews = async params => {
  return await axios.post(
    'https://eventregistry.org/api/v1/article/getArticles',
    {
      ...params,
      apiKey: process.env.NEWS_APITOKEN_IO
    }
  );
};
