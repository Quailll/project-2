const path = require("path");
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const session = require("express-session");

const Handlebars = require("handlebars");
const helpers = require("./util/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);
app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

const sess = {
  secret: "secret",
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controller"));
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  sequelize.sync({ force: false });
});
