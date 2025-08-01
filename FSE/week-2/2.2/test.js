const express = require("express");
const app = express();

const sum = (n) => {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
};

app.get("/sum", (req, res) => {
  const n = req.query.n;
  const ans = sum(n);
  res.send(ans.toString());
});

app.listen(3000, () => {
  console.log("Server started at post 3000");
});
