import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { buildSchemaSync } from 'type-graphql';
import path from 'path';

import { PORT } from '@Config';

const app = express();

// Config
app.set('port', PORT);

// Middlewares
app.use(cors());

// Apollo Server
const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [path.resolve(__dirname, 'graphql/resolvers/**/*.ts')],
    validate: false
  })
});

server.applyMiddleware({ app, path: '/graphql', cors: false });

export default app;
