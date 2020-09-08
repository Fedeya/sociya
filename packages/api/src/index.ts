import 'reflect-metadata';
import { config } from 'dotenv';

import app from './app';
import { connectDB } from '@Config/mongoose';

// dotenv
config();

(function init() {
  connectDB();
  app.listen(app.get('port'), () => {
    console.log('Server listening on', app.get('port'), '/graphql');
  });
})();
