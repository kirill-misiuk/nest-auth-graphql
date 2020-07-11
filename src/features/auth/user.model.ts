import { Field, InputType, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class User {
  @Field(() => String, { nullable: true })
  userId: string;
  @Field(() => String, { nullable: true })
  username: string;
}

@InputType()
export class UserInput {
  @Field(() => String)
  username: string;
  @Field(() => String)
  password: string;
}


