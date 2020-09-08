import { InterfaceType, Field, Int } from 'type-graphql';

@InterfaceType()
export class PaginateInterface {
  @Field()
  totalDocs!: number;

  @Field()
  offset!: number;

  @Field()
  limit!: number;

  @Field()
  totalPages!: number;

  @Field()
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
