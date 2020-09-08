import { ObjectType, Field } from 'type-graphql';

import { PaginateInterface } from '@Interfaces/paginate.interface';
import { Post } from '@Models/post.model';

@ObjectType({ implements: PaginateInterface })
export class PostsResponse {
  @Field(() => [Post])
  docs!: Post[];
}
