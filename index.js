// IMPORTING EXPRESS
const express = require("express");

//CREATION OF SERVER
const app = express();

//REQUIRING PATHS
const path = require("path");

//MIDDLEWARE FUNCTIONS
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// SERVER ROUTES
app.get("/", (req, res) => {
  res.send(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.send(path.join(__dirname, "public", "about.html"));
});

app.post("/form", (req, res) => {
  console.log(req.body);
  res.send("Form has successfully been received");
});

app.put("/updated", (req, res) => {
  res.send("Form has successfully been updated");
});

app.delete("/deleted", (req, res) => {
  res.send("Form has successfully been deleted");
});

app.listen(3020, "127.0.0.1", () => {
  console.log("My server is ready to operate");
});
