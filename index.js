const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./course.json");
const port=8000 || process.env.PORT;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log("Listening to the server");
});
