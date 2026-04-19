const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hotels", (req, res) => {
  res.json([
    { name: "Taj Hotel", price: 5000 },
    { name: "OYO Rooms", price: 1500 }
  ]);
});



app.get("/api/train", (req, res) => {
  res.json([{ from: "Delhi", to: "Lucknow", price: 800 }]);
});

app.listen(5000, () => console.log("Server running on port 5000"));