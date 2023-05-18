import express from "express";

import sentimentRoute from "./routers/sentiment.js";

const app = express();
const PORT = process.env.PORT || 7000;

// setup static directory to serve
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my chat GPT API");
});

app.use("/api/v1/sentiment", sentimentRoute);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
