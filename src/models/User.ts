import { Id, Model, Property } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { Profile } from "./Profile";

@Model()
@ObjectType()
export class User {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  name: string;

  @Field(() => Profile, { nullable: true })
  @Property(() => Profile, { nullable: true })
  profile?: Profile;
}
