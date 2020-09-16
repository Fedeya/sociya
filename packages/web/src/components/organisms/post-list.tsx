import { Center, Grid } from '@chakra-ui/core';

import Post from '@Molecules/post';
import { usePostsQuery } from '@Generated/graphql';

const PostList = () => {
  const [{ data, fetching }] = usePostsQuery();

  if (fetching) return <p>Loading...</p>;

  return (
    <Center>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {data?.posts.docs.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
    </Center>
  );
};

export default PostList;
