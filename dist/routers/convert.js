"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.get("/", async (req, res) => {
  const {
    from,
    to,
    amount
  } = req.query;
  try {
    const config = {
      headers: {
        apikey: process.env.API_TOKEN
      }
    };
    const response = await _axios.default.get(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, config);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "error making request"
    });
  }
});
var _default = router;
exports.default = _default;