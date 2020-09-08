import { InterfaceType, Field, Int } from 'type-graphql';

@InterfaceType()
export class PaginateInterface {
  @Field(() => Int)
  totalDocs!: number;

  @Field(() => Int)
  offset!: number;

  @Field(() => Int)
  limit!: number;

  @Field(() => Int)
  totalPages!: number;

  @Field(() => Int)
  page!: number;

  @Field()
  pagingCounter!: number;

  @Field()
  hasPrevPage!: boolean;

  @Field()
  hasNextPage!: boolean;

  @Field(() => Int, { nullable: true })
  prevPage!: null | number;

  @Field(() => Int, { nullable: true })
  nextPage!: null | number;
}
