import dotenv from 'dotenv';
import app from './app';
import { Logger } from './lib/loggers/logger';

dotenv.config();
const port = process.env.PORT || 3000;

// Start server here
app.listen(port, () => {
  // console.log(`Listening on port ${port}`);
  Logger.debug(`Server is up and running @ http://localhost:${port}`);
});
