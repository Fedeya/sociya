import { InputType, Field } from 'type-graphql';

import { User } from '@Models/user.model';

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}
