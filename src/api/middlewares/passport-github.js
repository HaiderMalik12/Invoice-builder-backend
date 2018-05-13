import passport from 'passport';
import GithubStrategy from 'passport-github';
import { devConfig } from '../../config/env/development';
import User from '../resources/user/user.model';

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
export const configureGithubStrategy = () => {
  passport.use(
    new GithubStrategy.Strategy(
      {
        clientID: devConfig.github.clientId,
        clientSecret: devConfig.github.clientSecret,
        callbackURL: devConfig.github.callbackURL,
      },
      async (token, tokenSecret, profile, done) => {
        try {
          // find the user by github id
          const user = await User.findOne({ 'github.id': profile.id });
          console.log(profile);
          if (user) {
            return done(null, user);
          }
          const newUser = new User({});
          newUser.github.id = profile.id;
          newUser.github.token = token;
          newUser.github.displayName = profile.displayName;
          newUser.github.email = profile.emails[0].value;
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
