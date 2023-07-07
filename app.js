require("dotenv").config();
const mongoose = require("mongoose");
// const https = require("https");
// const fs = require("fs");
const cors = require("cors");
const express = require("express");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");


const app = express();

app.use(express.json());
app.use(cors());

/* ROUTES */
app.use("/products", productRoute);
app.use("/categories", categoryRoute);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 2819;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
