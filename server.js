const path = require("path");
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
// const Handlebars = require("handlebars");
// const helpers = require('./utils/helpers')

const app = express();
const PORT = process.env.PORT || 3001;

// const SequelizeStore = require("connect-session-sequelize")(session.Store);
app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

// app.engine("handlebars", expvhs());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(require("./controller/loginRoutes"));

// Sequelize.sync({ force: false }).then(() => {
// });

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
