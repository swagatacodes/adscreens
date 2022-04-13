const express = require("express");
const { client, screenColl } = require("./db");

const app = express()
app.use(express.json())

client.connect().then(console.log(() => "mongodb connected")).catch(console.log)

app.get("screen", async (req, res) => {
    const mac = req.query.mac
    const doc = await screenColl.findOne({ mac })
    res.send(doc)
})

app.post("screen", async (req, res) => {
    const result = await screenColl.insertOne(req.body)
    res.send(result)
})

app.listen(3000, () => console.log("Server started at 3000"))