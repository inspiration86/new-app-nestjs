
import * as dotenv from 'dotenv';

const result = dotenv.config();

 if (result?.error) {
 throw new Error('Add .env file');
}

export const config = {
  env: process.env.SZ_ENV,
  appName:newApp,
  port:3000,
  mongoUri:
 `mongodb+srv://${process.env.SZ_MONGO_USER}:${process.env.SZ_MONGO_PASS}@
  ${process.env.SZ_MONGO_HOST}/${process.env.SZ_MONGO_DB}
  authSource=admin&replicaSet=${process.env.SZ_MONGO_REPLICA}&
  readPreference=primary&ssl=true`,
  };
