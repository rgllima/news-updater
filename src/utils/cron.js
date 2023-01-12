const { CronJob } = require("cron");

exports.scheduleJob = (time, callback) => new CronJob(
  time,
  () => {
    console.log(`[JOB] Started At ${new Date().toUTCString()}`)
    callback()
  },
  null,
  true
)
