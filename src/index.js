import dotenv from 'dotenv';
import app from './app';

dotenv.config();
const port = process.env.PORT || 3000;

// Start server here
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
