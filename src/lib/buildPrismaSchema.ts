import { buildSchema } from "decotix";
import { join } from "path";

buildSchema({
  input: [join(__dirname, "../models/*.*")],
  baseSchemas: [join(__dirname, "../../base.prisma")],
  emitTo: join(__dirname, "../../prisma/schema.prisma"),
});
