"use strict"

const ADMIN = require("firebase-admin")

const serviceAccount = require("../../service-account-key.json")

ADMIN.initializeApp({
  credential: ADMIN.credential.cert(serviceAccount),
  databaseURL: "{FIRESTORE_URL}",
})

module.exports = ADMIN
