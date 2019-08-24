export default {
  "post /api/login"(req, res, next) {
    const { username, password } = req.body;
    console.log(username, password);
    if (username == "hejieba" && password == "123") {
      return res.json({
        code: 0,
        data: {
          token: "hejiebaisgood",
          role: "admin",
          balance: 1000,
          username: "hejieba"
        }
      });
    }
    if (username == "jerry" && password == "123") {
      return res.json({
        code: 0,
        data: {
          token: "hejiebaisgood",
          role: "user",
          balance: 100,
          username: "jerry"
        }
      });
    }
    return res.status(401).json({
      code: -1,
      msg: "密码错误"
    });
  }
};
