const { MongoClient } = require("mongodb");

const dburl = ""
const client = new MongoClient(dburl)
const db = client.db("adscreen");
const screenColl = db.collection("screens")

module.exports = { client, db, screenColl }