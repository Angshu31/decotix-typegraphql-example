import "reflect-metadata";
import { buildGQLSchema } from "./lib/buildGqlSchema";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import ContextType from "./lib/ContextType";
import { PrismaClient } from "@prisma/client";

(async () => {
  const schema = await buildGQLSchema();

  const prisma = new PrismaClient();
  const apolloServer = new ApolloServer({
    schema,
    playground: true,
    context: ({ req, res }: ContextType) => ({
      req,
      res,
      prisma,
    }),
  } as any);

  const app = express();

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(
      `Server is running, GraphQL Playground available at http://localhost:4000/graphql`
    )
  );
})();
