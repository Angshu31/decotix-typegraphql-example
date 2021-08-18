import { Id, Model, Property, Int, Relation } from "decotix";
import { Field, ID, Int as GQLInt, ObjectType } from "type-graphql";
import { User } from "./User";

@Model()
@ObjectType()
export class Profile {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  username: string;

  @Field(() => GQLInt)
  @Property(() => Int)
  age: string;

  @Relation()
  @Field(() => User)
  @Property(() => User)
  user?: User;
}
