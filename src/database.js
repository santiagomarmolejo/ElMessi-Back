const mongoose = require('mongoose');
require("dotenv").config();

module.exports = connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URI)
    .then((db) => console.log(`connected to ${db}`))
    .catch((e) => console.log(`error ${e}`));
};
