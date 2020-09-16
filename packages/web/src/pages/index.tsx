import { GetServerSideProps } from 'next';
import { Text } from '@chakra-ui/core';

import { getClient } from '@Lib/urql';
import Layout from '@Templates/layout';
import { PostsDocument } from '@Generated/graphql';
import { withAuth } from '../utils/auth';

const Home: React.FC = () => {
  return (
    <Layout>
      <Text>Hello World</Text>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(async ctx => {
  const client = getClient(ctx);

  const res = await client.query(PostsDocument).toPromise();
  console.log(res);

  return {
    props: {
      posts: res.data
    }
  };
});

export default Home;
