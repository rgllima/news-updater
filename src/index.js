"use strict";

require("dotenv").config();

// Starts the updater trigger
require("./triggers/news-trigger.js").triggerUpdateDailyNews();
