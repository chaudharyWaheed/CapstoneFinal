const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/users");
const Cart = require("../models/cart");
const Order = require("../models/order");
const config = require("config");
const bcrypt = require("bcrypt");

router.post(
  "/",
  [
    check("name", "Please enter a name of almost 3 characters")
      .not()
      .isEmpty()
      .isLength({ min: 3 }),
    check("email", "Enter a valid email").isEmail(),
    check("password", "Enter password between 5 - 20 characters").isLength({
      min: 5,
      max: 20,
    }),
  ],
  async (req, res) => {
    // Validate Data inside request body
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    // Get Data
    const { name, email, password } = req.body;

    // Create User
    const user = new User({
      name,
      email,
      password,
    });

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    try {
      // Check if user already exist
      const checkUser = await User.findOne({ email }).select({ password: 0 });
      if (checkUser) return res.status(400).json({ msg: "User already exist" });

      // Add User in Database
      await user.save();

      // Add Cart in Database
      await new Cart({
        ownerID: user.id,
        products: [],
      }).save();

      // Add Orders Table in Database
      await new Order({
        ownerID: user.id,
        products: [],
      }).save();

      // Return jwt
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 100000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );
    } catch (err) {
      console.log("Error ", err.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;