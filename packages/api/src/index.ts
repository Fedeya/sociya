import 'reflect-metadata';
import { config } from 'dotenv';

import { connectDB } from '@Config/mongoose';
import app from './app';

// dotenv
config();

(function init() {
  connectDB();
  app.listen(app.get('port'), () => {
    console.log('Server listening on', app.get('port'), '/graphql');
  });
})();
