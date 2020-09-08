import { Resolver, Query, Arg, ID } from 'type-graphql';

import { User, UserModel } from '@Models/user.model';
import { UsersResponse } from '@Types/user.type';

@Resolver(User)
export class UserResolver {
  @Query(() => UsersResponse)
  async users(): Promise<UsersResponse> {
    const users = await UserModel.paginate({});
    return users;
  }

  @Query(() => User)
  async user(@Arg('id', () => ID) id: string) {
    const user = await UserModel.findById(id);
    return user;
  }
}
