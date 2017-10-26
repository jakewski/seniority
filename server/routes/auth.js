const router = require("express").Router();
const Helper = require("../../models/helper");
const Helpee = require("../../models/helpee");

router.post("/login/:flag", (req, res, next) => {
  const User = req.params.flag === 'help' ? Helper : Helpee;
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) {
        res.status(401).send("User not found");
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send("Incorrect password");
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    })
    .catch(next);
});

router.post("/signup/:flag", (req, res, next) => {
  const User = req.params.flag === 'help' ? Helper : Helpee;
  console.log(req.params.flag);
  User.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)));
    })
    .catch(err => {
      if (err.name === "SequelizeUniqueConstraintError") res.status(401).send("User already exists");
      else next(err);
    });
});

router.post("/logout", (req, res) => {
    console.log(req.user);
    req.logout();
    res.sendStatus(200);
});

router.get("/me", (req, res) => {
  req.user ? console.log(req.user.name) : null;
  res.json(req.user);
});

module.exports = router;