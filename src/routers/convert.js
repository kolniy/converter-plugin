import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const { from, to, amount } = req.query;
  try {
    const config = {
      headers: {
        apikey: process.env.API_TOKEN,
      },
    };
    const response = await axios.get(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      config
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "error making request",
    });
  }
});

export default router;
