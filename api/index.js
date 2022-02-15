const express = require("express");
const cors = require("cors");

const contact_route = require("./contact_route")

const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (_, res) => {
  res.status(201).send("Hello World");
  return;
});

app.use("/api/mail", contact_route);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  return;
});
