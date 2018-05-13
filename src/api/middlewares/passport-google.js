import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth';
import { devConfig } from '../../config/env/development';

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
  new GoogleStrategy.OAuth2Strategy(
    {
      clientID: devConfig.google.clientId,
      clientSecret: devConfig.google.clientSecret,
      callbackURL: devConfig.google.callbackURL,
    },
    (accessToken, refreshToken, profile, done) => {
      //   User.findOrCreate({ googleId: profile.id }, (err, user) => done(err, user));
      console.log('accessToken: ', accessToken);
      console.log('refreshToken: ', refreshToken);
      console.log('profile: ', profile);
      done(null, profile);
    }
  )
);
