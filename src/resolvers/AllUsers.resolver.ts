import { Ctx, Query, Resolver } from "type-graphql";
import ContextType from "../lib/ContextType";
import { User } from "../models/User";

@Resolver()
export class AllUsers {
  @Query(() => [User])
  allUsers(@Ctx() { prisma }: ContextType) {
    return prisma.user.findMany();
  }
}
