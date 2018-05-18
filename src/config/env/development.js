export const devConfig = {
  port: 3000,
  database: 'invoice-builder',
  secret: 'AHSDEUIYEIUER',
  frontendURL: 'http://localhost:4200',
  google: {
    clientId: '706785035459-ipo473bq6cb3hi64euurr741ocd42m26.apps.googleusercontent.com',
    clientSecret: 's_iQ4OMsjPWPlZRHQplZOhCx',
    callbackURL: 'http://localhost:3000/api/auth/google/callback',
  },
  twitter: {
    consumerKey: 'tDpiVQhiwC9eOX9DoNUjXPLBW',
    consumerSecret: 'AGrY6fRkPQfbj6uPpI3JANbvbsnuCsgOMn9W9BLXXCDDIRIaLx',
    callbackURL: 'http://localhost:3000/api/auth/twitter/callback',
    userProfileURL: 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
  },
  github: {
    clientId: '79bdab1805aa121cda61',
    clientSecret: '514711afa587ebfc68671eecca71f11fb2771a28',
    callbackURL: 'http://localhost:3000/api/auth/github/callback',
  },
};
