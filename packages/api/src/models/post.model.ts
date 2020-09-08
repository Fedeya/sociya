import { Field, ObjectType, ID } from 'type-graphql';
import { Prop, getModelForClass, Plugins, Ref } from '@typegoose/typegoose';
import paginate from 'mongoose-paginate-v2';

import { Paginate } from '@Interfaces';
import { Status } from '@Enums';
import { User } from './user.model';

@Plugins(paginate)
@ObjectType()
export class Post {
  @Field(() => ID)
  id!: string;

  @Field(() => User)
  @Prop({ type: User, required: true })
  user!: Ref<User>;

  @Field()
  @Prop({ trim: true, required: true })
  content!: string;

  @Prop({ type: Status, default: Status.ACTIVE })
  status: Status = Status.ACTIVE;

  static paginate: Paginate<Post>;
}

export const PostModel = getModelForClass(Post, {
  schemaOptions: {
    timestamps: true
  }
});
