const router = require("express").Router();
let User = require("../models/user.models");

// handles incoming HTTP get requests on the /users URL path.
router.route("/").get((req, res) => {
  User.find() //mongoose method: gets a list of all users from MongoDB Atlas DB.
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Handles the incoming HTTP post request
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("user added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
