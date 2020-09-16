import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  user: User;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  posts: Array<Post>;
  rol: Roles;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum Roles {
  Normal = 'NORMAL',
  Admin = 'ADMIN'
}

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type PostsResponse = PaginateInterface & {
  __typename?: 'PostsResponse';
  totalDocs: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  totalPages: Scalars['Int'];
  page: Scalars['Int'];
  pagingCounter: Scalars['Float'];
  hasPrevPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  prevPage?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  docs: Array<Post>;
};

export type UsersResponse = PaginateInterface & {
  __typename?: 'UsersResponse';
  totalDocs: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  totalPages: Scalars['Int'];
  page: Scalars['Int'];
  pagingCounter: Scalars['Float'];
  hasPrevPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  prevPage?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  docs: Array<User>;
};

export type PaginateInterface = {
  totalDocs: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  totalPages: Scalars['Int'];
  page: Scalars['Int'];
  pagingCounter: Scalars['Float'];
  hasPrevPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  prevPage?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type PostInput = {
  content: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  posts: PostsResponse;
  post: Post;
  users: UsersResponse;
  user: User;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Token;
  register: Token;
  createPost: Post;
};


export type MutationLoginArgs = {
  input: AuthInput;
};


export type MutationRegisterArgs = {
  input: UserInput;
};


export type MutationCreatePostArgs = {
  input: PostInput;
};

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'content' | 'id'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  ) }
);

export type LoginMutationVariables = Exact<{
  input: AuthInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Token' }
    & Pick<Token, 'token'>
  ) }
);

export type RegisterMutationVariables = Exact<{
  input: UserInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'Token' }
    & Pick<Token, 'token'>
  ) }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'PostsResponse' }
    & { docs: Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'content'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'username'>
      ) }
    )> }
  ) }
);


export const CreatePostDocument = gql`
    mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    content
    id
    user {
      username
    }
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const LoginDocument = gql`
    mutation Login($input: AuthInput!) {
  login(input: $input) {
    token
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($input: UserInput!) {
  register(input: $input) {
    token
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const PostsDocument = gql`
    query Posts {
  posts {
    docs {
      id
      content
      user {
        username
      }
    }
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};