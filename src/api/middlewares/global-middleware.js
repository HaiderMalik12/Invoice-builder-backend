import express from 'express';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import passport from 'passport';

import swaggerDocument from '../../config/swagger.json';

export const setGlobalMiddleware = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(logger('dev'));
  app.use(passport.initialize());
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true,
    })
  );
};
