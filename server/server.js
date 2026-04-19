const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/flights", (req, res) => {
  res.json([
    { from: "Delhi", to: "Mumbai", price: 5000 },
    { from: "Delhi", to: "Goa", price: 6000 }
  ]);
});

app.get("/api/hotels", (req, res) => {
  res.json([
    { name: "Taj Hotel", price: 5000 },
    { name: "OYO Rooms", price: 1500 }
  ]);
});

app.get("/api/bus", (req, res) => {
  res.json([{ from: "Delhi", to: "Agra", price: 500 }]);
});

app.get("/api/train", (req, res) => {
  res.json([{ from: "Delhi", to: "Lucknow", price: 800 }]);
});

app.listen(5000, () => console.log("Server running on port 5000"));