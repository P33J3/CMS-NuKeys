import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { userRouter, userRegRouter, documentRouter } from './routes';
import { errorHandler } from './middlewares';
import { morganMiddleware } from './lib/loggers/morganMiddleware';
import { Logger } from './lib/loggers/logger';

const app = express();

// Middlewares

app.use(morganMiddleware);

// Bodyparser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// CORS
app.use(cors());
// Error Middleware
app.use(errorHandler);

// Routes go here
app.use('/reg', userRegRouter);
app.use('/admin', userRouter);
app.use(documentRouter);

// to be removed after successful implementation of logger
app.get('/logger', (_, res) => {
  Logger.error('This is an error log');
  Logger.warn('This is a warn log');
  Logger.info('This is a info log');
  Logger.http('This is a http log');
  Logger.debug('This is a debug log');

  res.send('Hello world');
});

app.get('/', (req, res) => {
  res.send('<h1>Server is running!</h1>');
});

export default app;
