import passport from 'passport';
import TwitterStrategy from 'passport-twitter';
import { devConfig } from '../../config/env/development';
import User from '../resources/user/user.model';

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
export const configureTwitterStrategy = () => {
  passport.use(
    new TwitterStrategy.Strategy(
      {
        consumerKey: devConfig.twitter.consumerKey,
        consumerSecret: devConfig.twitter.consumerSecret,
        callbackURL: devConfig.twitter.callbackURL,
        userProfileURL: devConfig.twitter.userProfileURL,
        passReqToCallback: true,
      },
      async (req, token, tokenSecret, profile, done) => {
        try {
          // find the user by twitter id
          // console.log(profile.emails[0].value);
          const user = await User.findOne({ 'twitter.id': profile.id });
          // console.log(profile);
          if (user) {
            return done(null, user);
          }
          const newUser = new User({});
          newUser.twitter.id = profile.id;
          newUser.twitter.token = token;
          newUser.twitter.displayName = profile.displayName;
          newUser.twitter.username = profile.username;
          newUser.twitter.email = profile.emails[0].value;
          await newUser.save();
          done(null, newUser);
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
