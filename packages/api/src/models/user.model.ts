import { Field, ObjectType, ID } from 'type-graphql';
import { Prop, getModelForClass, Plugins, Ref } from '@typegoose/typegoose';
import paginate from 'mongoose-paginate-v2';

import { Rol, Status } from '@Enums';
import { Paginate } from '@Interfaces';
import { Post } from './post.model';

@Plugins(paginate)
@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field()
  @Prop({ required: true, trim: true })
  username!: string;

  @Field()
  @Prop({ required: true, trim: true })
  email!: string;

  @Field()
  @Prop({ required: true })
  password!: string;

  @Field()
  @Prop({ required: true, type: Post })
  posts!: Ref<Post>[];

  @Field(() => Rol)
  @Prop({ default: Rol.NORMAL, type: Rol })
  rol: Rol = Rol.NORMAL;

  @Prop({ default: Status.ACTIVE, type: Status })
  status: Status = Status.ACTIVE;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  static paginate: Paginate<User>;
}

export const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true
  }
});
