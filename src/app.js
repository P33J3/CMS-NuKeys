import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import userRouter from './routes';
import  errorHandler  from './middlewares';



const app = express();

// Middlewares

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
app.use(userRouter);

app.get('/', (req, res) => {
  res.send('<h1>Server is running!</h1>');
});

export default app;
