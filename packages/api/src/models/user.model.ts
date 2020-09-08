import { Field, ObjectType, ID } from 'type-graphql';
import {
  Prop,
  getModelForClass,
  Plugins,
  Ref,
  Pre,
  DocumentType
} from '@typegoose/typegoose';
import paginate from 'mongoose-paginate-v2';
import argon2 from 'argon2';
import { PaginateModel } from 'mongoose';

import { Rol, Status } from '@Enums';
import { Post } from './post.model';

@Pre<User>('save', async function () {
  this.password = await argon2.hash(this.password);
})
@Plugins(paginate)
@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field()
  @Prop({ required: true, trim: true })
  username!: string;

  @Field()
  @Prop({ required: true, trim: true, unique: true })
  email!: string;

  @Field()
  @Prop({ required: true })
  password!: string;

  @Field(() => [Post])
  @Prop({ ref: Post })
  posts!: Ref<Post>[];

  @Field(() => Rol)
  @Prop({ default: Rol.NORMAL, enum: Rol })
  rol: Rol = Rol.NORMAL;

  @Prop({ default: Status.ACTIVE, enum: Status })
  status: Status = Status.ACTIVE;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  comparePassword(password: string) {
    return argon2.verify(this.password, password);
  }
}

export const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true
  }
}) as PaginateModel<DocumentType<User>>;
