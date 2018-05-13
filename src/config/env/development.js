export const devConfig = {
  port: 3000,
  database: 'invoice-builder',
  secret: 'AHSDEUIYEIUER',
  google: {
    clientId: '706785035459-ipo473bq6cb3hi64euurr741ocd42m26.apps.googleusercontent.com',
    clientSecret: 's_iQ4OMsjPWPlZRHQplZOhCx',
    callbackURL: 'http://localhost:3000/api/auth/google/callback',
  },
  twitter: {
    consumerKey: 'dFRt0qpQ564CfsRj2Q8CzztdB',
    consumerSecret: 'ymhQctr7r6FYTWKfcKG1FjPQGyHTTBdeIOvP8h3f301UpgA1VT',
    callbackURL: 'http://localhost:3000/api/auth/twitter/callback',
  },
};
