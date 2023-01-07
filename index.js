const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./course.json");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(8000, () => {
  console.log("Listening to the server");
});
