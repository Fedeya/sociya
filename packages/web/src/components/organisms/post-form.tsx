import {
  Box,
  Center,
  Flex,
  FormControl,
  Textarea,
  FormLabel,
  Button,
  FormErrorMessage
} from '@chakra-ui/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { useCreatePostMutation } from '@Generated/graphql';
import { useAuthMutation } from '@Hooks/auth';

type FormValues = {
  content: string;
};

const PostForm: React.FC = () => {
  const [, createPost] = useAuthMutation(useCreatePostMutation);

  const { errors, register, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(
      yup.object({
        content: yup.string().required('the content is required.')
      })
    )
  });

  const onSubmit: SubmitHandler<FormValues> = async values => {
    const result = await createPost({
      input: values
    });
    console.log(result);
  };

  return (
    <Center>
      <Flex mt={5} minWidth={500}>
        <Box
          borderWidth={1}
          borderRadius={4}
          width="full"
          maxWidth={500}
          mx={5}
          p={4}
          boxShadow="lg"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.content}>
              <FormLabel>Content</FormLabel>
              <Textarea
                ref={register}
                name="content"
                placeholder="Post Content"
              />
              <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
            </FormControl>
            <Button colorScheme="purple" type="submit">
              Create Post
            </Button>
          </form>
        </Box>
      </Flex>
    </Center>
  );
};

export default PostForm;
