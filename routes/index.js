var express = require('express');
var router = express.Router();
var userModel = require("./users")

router.get('/create', async (req, res) => {
  try {
    const createUser = await userModel.create({
      username: 'harshitheya',
      age: 21,
      name: 'harshit'
    });
    res.status(201).send(createUser); // Send the created user
  } catch (err) {
    res.status(500).send("Error creating user: " + err.message);
  }
});

module.exports = router;
