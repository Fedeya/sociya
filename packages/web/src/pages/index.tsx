import { GetServerSideProps } from 'next';
import { Text } from '@chakra-ui/core';

import { getClient } from '@Lib/urql';
import { PostsDocument } from '@Generated/graphql';
import { withAuth } from '@Utils/auth';

import Layout from '@Templates/layout';
import PostList from '@Organisms/post-list';
import PostForm from '@Organisms/post-form';

const Home: React.FC = () => {
  return (
    <Layout>
      <PostForm />
      <PostList />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(async ctx => {
  const client = getClient(ctx);

  const res = await client.query(PostsDocument).toPromise();

  return {
    props: {
      posts: res.data
    }
  };
});

export default Home;
