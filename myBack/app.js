const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const logIn = require("./routes/login.js");
const signup = require("./routes/signup.js");
const addcreature = require("./routes/addcreatures.js");
const creatures = require("./routes/creatures.js");

app.use(express.json());
app.use(cors());

app.use(logIn);
app.use(signup);
app.use(addcreature);
app.use(creatures);

mongoose
  .connect(
    "mongodb+srv://MyPc:tHyXYPXT9XRvZsat@cluster0.ltbuhuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
