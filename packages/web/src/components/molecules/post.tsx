import { Box, Center, Text, Stack } from '@chakra-ui/core';
import { Post as IPost, User } from '@Generated/graphql';

type PostProps = {
  post: {
    __typename?: 'Post' | undefined;
  } & Pick<IPost, 'id' | 'content'> & {
      user: {
        __typename?: 'User' | undefined;
      } & Pick<User, 'username'>;
    };
};

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Box p={5} minWidth={200} boxShadow="lg">
      <Center>
        <Stack>
          <Text fontSize="xl">{post.content}</Text>
          <Text>{post.user.username}</Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Post;
