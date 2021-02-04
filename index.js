const express = require("express");
const app = express();

app.use(express.json())

app.get('/', (req, res) => res.json({ ok: true}))

app.listen(8081, function() {
    console.log("http://localhost:8081");
});