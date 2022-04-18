const GitHubStrategy = require('passport-github2').Strategy;
const passport = require("passport");
const GITHUB_CLIENT_ID = '5575533b2a6e2826cb78';
const GITHUB_CLIENT_SECRET = '8810aa402eab37146554919d3bc6f3f07ced99c8';

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3002/dashboard/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
