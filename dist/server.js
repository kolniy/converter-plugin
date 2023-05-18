"use strict";

var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _express = _interopRequireDefault(require("express"));
var _convert = _interopRequireDefault(require("./routers/convert.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const currentModuleURL = import.meta.url;
const app = (0, _express.default)();
const PORT = process.env.PORT || 7000;
const _dirname = _path.default.dirname((0, _url.fileURLToPath)(currentModuleURL));

// setup static directory to serve
app.use(_express.default.json({
  extended: false
}));
app.get("/", (req, res) => {
  res.status(200).send("Welcome to my chat GPT API");
});
app.get("/.well-known/ai-plugin.json", (req, res) => {
  const filePath = _path.default.join(_dirname, "/.well-known/ai-plugin.json");
  res.sendFile(filePath, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send({
        msg: "error sending file"
      });
    } else {
      console.log("Sent:", filePath);
    }
  });
});
app.get("/.well-known/openai.yaml", (req, res) => {
  const filePath = _path.default.join(_dirname, "/openai.yaml");
  res.sendFile(filePath, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send({
        msg: "error sending file"
      });
    } else {
      console.log("Sent:", filePath);
    }
  });
});
app.use("/api/v1/convert", _convert.default);
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});