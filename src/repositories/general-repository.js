"use strict"

const Firebase = require("../config/firebase-config")
const db = Firebase.firestore()

const GeneralRepository = {
  findOne: (collection, id) => db.collection(collection).doc(id).get(),

  create: (coll, doc) => db.collection(coll).doc(doc["id"]).set(doc),

  update: (coll, doc) => db.collection(coll).doc(doc["id"]).update({ ...doc, updated_at: new Date() }),
}

module.exports = GeneralRepository
