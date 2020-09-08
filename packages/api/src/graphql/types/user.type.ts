import { ObjectType, Field } from 'type-graphql';

import { PaginateInterface } from '@Interfaces/paginate.interface';
import { User } from '@Models/user.model';

@ObjectType({ implements: PaginateInterface })
export class UsersResponse {
  @Field(() => [User])
  docs!: User[];
}
