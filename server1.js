const express = require('express');
const app = express();
app.get("/", function (req, res) {
  res.sendFile(__dirname+ "/"+ "index1.html");
});
app.get("/style1.css", function (req, res) {
  res.sendFile(__dirname + "/" + "style1.css");
});
app.get("/script1.js", function (req, res) {
  res.sendFile(__dirname + "/" + "script1.js");
});
app.listen(3002, () => {
  console.log("server is initiated");
});
