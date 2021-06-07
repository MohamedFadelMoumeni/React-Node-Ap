const express = require('express'); 
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000; //use 5000 in our machine instead use the PORT that the cloud gives to us 
app.listen(5000);
// Client ID 707770149189-8ne0mk321ovem99qa5si7p0n9nhen67e.apps.googleusercontent.com
// SECRET ID _YBVMOQ03OwDWzgBgBnqAone