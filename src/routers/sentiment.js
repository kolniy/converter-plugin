import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  const { text } = req.body;

  return res.json({
    sentiment,
  });
});

export default router;
