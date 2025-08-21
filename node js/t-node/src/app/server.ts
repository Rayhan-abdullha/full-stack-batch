import app from './app';
import config from '../config/config';
import mongoose from 'mongoose'
async function main() {
  await mongoose.connect(config.url)
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
}
main()