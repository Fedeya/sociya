import mongoose from 'mongoose';

export interface PaginateResult<T> {
  docs: T[];
  total?: number;
  limit?: number;
  nextPage?: number;
  page: number;
  hasNextPage: boolean;
}

export type Paginate<T> = (
  query: object,
  options?: mongoose.PaginateOptions
) => Promise<PaginateResult<T>>;
