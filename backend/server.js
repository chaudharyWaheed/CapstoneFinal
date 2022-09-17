const express = require("express");
const app = express();
const connectDB = require("./config/db");

app.use(express.json({ extended: false }));

connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Ecommerce webapp" });
});


app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/Product"));
app.use("/api/carts", require("./routes/cart"));
app.use("/api/orders", require("./routes/orders"));


app.listen(PORT, () => {
  console.log(`Server has been started\nhttp://localhost:${PORT}`);
});