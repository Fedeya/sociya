import { Field, ObjectType, ID } from 'type-graphql';
import {
  Prop,
  getModelForClass,
  Plugins,
  Ref,
  DocumentType
} from '@typegoose/typegoose';
import paginate from 'mongoose-paginate-v2';
import { PaginateModel } from 'mongoose';

import { Status } from '@Enums';
import { User } from './user.model';

@Plugins(paginate)
@ObjectType()
export class Post {
  @Field(() => ID)
  id!: string;

  @Field(() => User)
  @Prop({ ref: 'User', required: true })
  user!: Ref<User>;

  @Field()
  @Prop({ trim: true, required: true })
  content!: string;

  @Prop({ enum: Status, default: Status.ACTIVE })
  status: Status = Status.ACTIVE;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}

export const PostModel = getModelForClass(Post, {
  schemaOptions: {
    timestamps: true
  }
}) as PaginateModel<DocumentType<Post>>;
