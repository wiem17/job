var app = require("./app.js");
require("dotenv").config();
app.set("view engine", "ejs");
const PORT = process.env.APP_PORT;

app.use("/user", require("./routes/user.js"));

app.listen(PORT, async () => {
  console.log(`Listen to port ${PORT}`);
});
