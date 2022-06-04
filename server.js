const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  //don't duplicate the session
  resave: false,
  saveUninitialized: true,
  //setting sequelize store to sequelize connection in config/connection.js
  store: new SequelizeStore({
    db: sequelize
  })
};

//use session const created above here
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//links handlebars engine with public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});