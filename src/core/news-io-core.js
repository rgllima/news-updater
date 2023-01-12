"use strict";

const hash = require("object-hash");
const NewsIoService = require("../services/news-io-service");
const GeneralRepository = require("../repositories/general-repository")

exports.updateDailyNews = async (query) => {
  let inserted = 0;

  const { data } = await NewsIoService.getNews(query);
  const { results } = data.articles

  for (let article of results) {
    try {
      article["id"] = hash({ url: article['url'] }); // Create unique id for each object
      article["type"] = query.type;
      article["publishedInTelegram"] = false;
      article["description"] = article["body"];
      article["urlToImage"] = article["image"];
      article["publishedAt"] = article["dateTimePub"];
      article["author"] = article["authors"].length ? article["authors"][0]["name"] : null;
      article["source"]["name"] = article["source"]["title"];

      const dbArticle = await GeneralRepository.findOne('articles', article["id"]);
      if (dbArticle.exists) continue

      await  GeneralRepository.create('articles', article)
      inserted++
    } catch (e) {
      console.log(e.message);
    }
  }

  console.log(`Done. ${inserted} news inserted.`);
};
