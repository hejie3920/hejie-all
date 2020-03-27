const express = require("express");

const app = express();

app.get("/api/info", (req, res) => {
  res.json({
    name: "和杰",
    age: 5,
    msg: "欢迎来到和杰学习前端高级物品"
  });
});

app.listen("9092");
