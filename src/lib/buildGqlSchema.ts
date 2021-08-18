import { buildSchema } from "type-graphql";
import { join } from "path";

export const buildGQLSchema = () =>
  buildSchema({
    resolvers: [join(__dirname, "../**/*.resolver.*")],
  });
