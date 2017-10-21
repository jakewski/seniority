const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require('express-session')
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./models");
const sessionStore = new SequelizeStore({ db });

const PORT = process.env.PORT || 8080;

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) =>
  db.models.helper.findById(id)
    .then(user => {
        if(user) done(null, user)
        else {
            db.models.helpee.findById(id)
                .then(user2 => {
                    done(null, user2)
                })
                .catch(done)
        }
    })
    .catch(done))

//import routes
const helpeeRouter = require("./server/routes/helpee");
const helperRouter = require("./server/routes/helper");
const loginRouter = require("./server/routes/login");
const registerRouter = require("./server/routes/helpee");
const authRouter = require("./server/routes/auth");
const app = express();

//register routes
app.use("/helpee", helpeeRouter);
app.use("/helper", helperRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//passport auth
app.use(session({
    secret: process.env.SESSION_SECRET || 'my best friend is Cody',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  }))
app.use(passport.initialize())
app.use(passport.session())

app.use("/auth", authRouter);
//serve static
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "public/index-contact.html"));
});

app.use(function(err, req, res, next) {
  console.error(err, err.stack);
  res.status(500).send(err);
});

sessionStore.sync()
    .then(() => {
        db.sync({ force: true }).then(() => {
            const server = app.listen(PORT, () => console.log(`Helping seniors on port ${PORT}`));
        });
    })


module.exports = app;
