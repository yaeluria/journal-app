const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");
// Load User model
const Entry = require("../../models/Entry");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/new", (req, res) => {
    // Form validation
//   const { errors, isValid } = validateRegisterInput(req.body);
//   // Check validation
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

 
        const newEntry = new Entry({
          title: req.body.title,
          content: req.body.content,
        });
        newEntry
        .save()
        // .then(user => res.json(user))
        // .catch(err => console.log(err));
      }
    );

  
  

  module.exports = router;