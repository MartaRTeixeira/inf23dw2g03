const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const swaggerui = require('swagger-ui-express');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');

const middleware = require('./controllers/middleware');
const protectedController = require('./controllers/protectedController');
require('./controllers/environmentController');

const authRoute = require('./routes/authRoute');
const animalRoute = require('./routes/animalRoute');
const volunteerRoute = require('./routes/volunteerRoute');
const personRoute = require('./routes/personRoute');
const adoptionRoute = require('./routes/adoptionRoute');
const swaggerSpec = require('./controllers/swaggerController');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/docs', swaggerui.serve, swaggerui.setup(swaggerSpec, {
    swaggerOptions: {
      requestInterceptor: (req) => {
        const token = new URLSearchParams(window.location.search).get('token');
        if (token) {
          req.headers['Authorization'] = `Bearer ${token}`;
        }
        return req;
      }
    }
  }));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URI,
    passReqToCallback: true,
  },
  function(request, accessToken, refreshToken, profile, done) {
      const token = jwt.sign(profile, process.env.JWT_SECRET);
      return done(null, { profile, token });
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use('/', authRoute);
app.use('/', middleware.isAuthenticated, animalRoute, volunteerRoute, personRoute, adoptionRoute);
app.use('/protected', middleware.isLoggedIn, protectedController.getProtectedResource);

app.listen(process.env.NODE_PORT, () => {
    console.log('Server running on ' + process.env.HOSTNAME + ':' + process.env.NODE_PORT);
});