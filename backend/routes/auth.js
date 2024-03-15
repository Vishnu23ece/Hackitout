const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { query, validationResult, body } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "WasteManagement1@b&";

//ROUTE 1:creating a user using :POST "/api/auth/createUser"
router.post(
  "/createUser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    //if ther are no errors ,return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    //check whether this user eith this email exist already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const auhToken = jwt.sign(data, JWT_SECRET);
    //   console.log(auhToken);
      success = true;
      res.json({ success, auhToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);
//ROUTE 2:authenticating a user using :POST "/api/auth/login,no login required
router.post(
    "/login",
    [
      body("email").isEmail(),
      body("password", "Password cannot be blank").exists(),
    ],
    async (req, res) => {
      let success = false;
      const errors = validationResult(req);
      if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;
      try {
        let user = await User.findOne({ email });
        if (!user) {
          return res
            .status(400)
            .json({ error: "plase try to login with correct email" });
        }
        const passwordcompare = await bcrypt.compare(password, user.password);
        if(!passwordcompare){
          success = false;
          return res
            .status(400)
            .json({ success, error: "plase try to login with correct password" });
        }
        const data = {
          user: {
            id: user.id,
          },
        };
        const auhToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, auhToken });
      } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
      }
    }
);

module.exports = router;
