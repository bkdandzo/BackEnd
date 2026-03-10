const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express server");
});

app.get("/about", (req, res) => {
  res.send("About this application");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.get("/products", (req, res) => {
  const products = [
    { name: "Trumpet", type: "Brass", color: "Cooper" },
    { name: "Cornet", type: "Brass", color: "Gold" },
    { name: "Alto Saxophone", type: "Woodwind", color: "Silver" },
    { name: "Tenor Saxophone", type: "Woodwind", color: "Antique" },
  ];
  res.json(products);
});

app.get("/api/user", (req, res) => {
  const user = {
    name: "Bless Kojo Dandzo",
    age: "26 years",
    location: "Adenta",
    course: "UI / UX design",
  };
  res.json(user);
});

app.listen(3000, "127.0.0.1", () => {
  console.log("My server is ready to operate");
});
