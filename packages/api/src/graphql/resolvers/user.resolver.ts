import { Resolver, Query, Arg, ID, FieldResolver, Root } from 'type-graphql';
import { DocumentType } from '@typegoose/typegoose';

import { User, UserModel } from '@Models/user.model';
import { PostModel } from '@Models/post.model';
import { Status } from '@Enums';
import { UsersResponse } from '@Types/user.type';
import { PaginateInput } from '@Inputs/paginate.input';

@Resolver(User)
export class UserResolver {
  @Query(() => UsersResponse)
  async users(
    @Arg('input', { nullable: true }) input: PaginateInput
  ): Promise<UsersResponse> {
    const users = await UserModel.paginate({ status: Status.ACTIVE }, input);
    return users;
  }

  @Query(() => User)
  async user(@Arg('id', () => ID) id: string): Promise<User> {
    const user = await UserModel.findById(id)
      .where('status', Status.ACTIVE)
      .exec();
    if (!user) throw new Error('user not found');

    return user;
  }

  @FieldResolver()
  async posts(@Root() user: DocumentType<User>): Promise<User['posts']> {
    await PostModel.populate(user, {
      path: 'posts',
      match: { status: Status.ACTIVE }
    });
    return user.posts;
  }
}
