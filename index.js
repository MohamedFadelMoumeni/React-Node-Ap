const express = require('express'); 
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleSecretID,
    callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, cb) => { // Callback after Oauth
console.log("access Token", accessToken);
console.log("Profile", profile);
}
));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'] // access we want from the user
}))
app.get('/auth/google/callback', passport.authenticate('google'))


const PORT = process.env.PORT || 5000; //use 5000 in our machine instead use the PORT that the cloud gives to us 
app.listen(5000);
