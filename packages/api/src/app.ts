import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { buildSchemaSync } from 'type-graphql';
import path from 'path';

import { authChecker } from '@Utils/authChecker';
import { JWT } from '@Utils/jwt';
import { PORT } from '@Config';
import { Context } from '@Interfaces';

const app = express();

// Config
app.set('port', PORT);

// Middlewares
app.use(cors());

// Apollo Server
const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [
      path.resolve(__dirname, 'graphql/resolvers/**/*.resolver.{js,ts}')
    ],
    validate: false,
    authChecker
  }),
  context: ({ req }): Context => {
    const authorization = req.headers['authorization'];
    if (!authorization) return {};

    try {
      const token = authorization.split(' ')[1];
      const { user } = JWT.verifyToken(token);

      return { user };
    } catch {
      return {};
    }
  }
});

server.applyMiddleware({ app, path: '/', cors: false });

export default app;
