const express = require("express");
const app = express();
const cors = require('cors');

const productModel = require('./schemas/product');
const userModel = require('./schemas/user');

const connectDB = require('./database');

connectDB();

app.use(express.json());
app.use(cors());

app.post("/addproduct", (req, res) => {
  const response = req.body;

  console.log(response);

  const product = productModel(response);

  product.save();

  res.send("File sent" + product);
});

app.get("/product", async (req, res) => {
  const response = await productModel
    .find({})
    .clone()
    .catch((e) => {
      console.log(`Error ${e}`);
    });
  res.send(response);
});

app.get("/user", async (req, res) => {
  const response = await userModel
    .find({})
    .clone()
    .catch((e) => {
      console.log(`Error ${e}`)
    })

  res.send(response);
})

app.post("/user", (req, res) => {
  const response = req.body;

  const user = userModel(response);

  user.save();

  res.send(user);
})

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(3100);
