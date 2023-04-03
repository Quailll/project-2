require('dotenv').config()
const express = require('express');
const sequelize = require('./config/connection')
const exphbs = require('express-handlebars')
// const helpers = require('./utils/helpers')


const app = express();
const PORT = process.env.PORT || 3001;

// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
  // Sequelize.sync({ force: false })
    
  });

app.get('/', function (req, res) {
  req.render('home');

});