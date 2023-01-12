"use strict";

const NewsIoCore = require("../core/news-io-core")
const { scheduleJob } = require("../utils/cron");

exports.triggerUpdateDailyNews = () => {
  console.log("Update Daily Trigger Registered.");

  const query = {
    "action": "getArticles",
    "keyword": [
      "eleição",
      "eleições",
      "lula",
      "bolsonaro",
      "ciro gomes",
      "simone tebet",
      "andré janones",
      "eleições 2022",
      "política"
    ],
    "keywordOper": "or",
    "ignoreKeyword": [
      "Covid-19"
    ],
    "articlesPage": 1,
    "articlesCount": 35,
    "articlesSortBy": "date",
    "articlesSortByAsc": false,
    "articlesArticleBodyLen": 300,
    "lang": "por",
    "resultType": "articles",
    "dataType": [
      "news",
      "pr",
      "blog"
    ],
    "forceMaxDataTimeWindow": 31,
    type: 'bbb'
  }

  scheduleJob( "00 00 11 * * *", () => NewsIoCore.updateDailyNews(query))

  scheduleJob( "00 00 15 * * *", () => NewsIoCore.updateDailyNews(query))

  scheduleJob( "00 00 18 * * *", () => NewsIoCore.updateDailyNews(query))

  scheduleJob( "00 00 21 * * *", () => NewsIoCore.updateDailyNews(query))

  scheduleJob( "00 00 23 * * *", () => NewsIoCore.updateDailyNews(query))
};
