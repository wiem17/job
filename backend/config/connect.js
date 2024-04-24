const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://brahmi:rtfgcv@clusterudemyproject.9o9r0.mongodb.net/juridique?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = mongoose;
//hxFTL6BDEGpVnYIQ
