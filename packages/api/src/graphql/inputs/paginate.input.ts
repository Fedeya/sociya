import { InputType, Field, Int } from 'type-graphql';
import { PaginateOptions } from 'mongoose';

@InputType()
export class PaginateInput implements PaginateOptions {
  @Field(() => Int, { nullable: true })
  limit!: number;

  @Field(() => Int, { nullable: true })
  offset!: number;

  @Field(() => Int, { nullable: true })
  page!: number;
}
