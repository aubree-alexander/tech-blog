const path = require('path');
const express = require('express');
const session = require('express-session');
const helpers = require('./utils/helpers');
const routes = require('./controllers');

//require handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

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



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//links handlebars engine with public folder
app.use(express.static(path.join(__dirname, 'public')));
//use session const created above here
app.use(session(sess));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
