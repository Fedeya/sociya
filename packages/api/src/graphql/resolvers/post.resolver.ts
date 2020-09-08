import {
  Resolver,
  Query,
  Arg,
  ID,
  Authorized,
  Mutation,
  Ctx,
  FieldResolver,
  Root
} from 'type-graphql';
import { DocumentType } from '@typegoose/typegoose';

import { Post, PostModel } from '@Models/post.model';
import { UserModel } from '@Models/user.model';
import { PostsResponse } from '@Types/post.type';
import { Roles, Status } from '@Enums';
import { PostInput } from '@Inputs/post.input';
import { Context } from '@Interfaces';

@Resolver(Post)
export class PostResolver {
  @Query(() => PostsResponse)
  async posts(): Promise<PostsResponse> {
    const posts = await PostModel.paginate({ status: Status.ACTIVE });
    return posts;
  }

  @Query(() => Post)
  async post(@Arg('id', () => ID) id: string): Promise<Post> {
    const post = await PostModel.findById(id).exec();
    if (!post) throw new Error('post not found');
    return post;
  }

  @Authorized(Roles.NORMAL)
  @Mutation(() => Post)
  async createPost(
    @Arg('input') input: PostInput,
    @Ctx() ctx: Context
  ): Promise<Post> {
    const user = await UserModel.findById(ctx.user?.id)
      .where('status', Status.ACTIVE)
      .exec();
    if (!user) throw new Error('user not found');

    const post = new PostModel({
      ...input,
      user: ctx.user?.id
    });

    user.posts.push(post);

    await Promise.all([user.save(), post.save()]);

    return post;
  }

  @FieldResolver()
  async user(@Root() post: DocumentType<Post>): Promise<Post['user']> {
    await UserModel.populate(post, { path: 'user' });
    return post.user;
  }
}
