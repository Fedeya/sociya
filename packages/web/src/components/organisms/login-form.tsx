import { useContext } from 'react';
import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Stack,
  Box,
  Heading
} from '@chakra-ui/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';

import { AuthContext } from '@Context/auth/auth-context';
import { useLoginMutation } from '@Generated/graphql';

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [{ fetching }, login] = useLoginMutation();
  const router = useRouter();
  const { setToken } = useContext(AuthContext);

  const { register, errors, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(
      yup.object({
        email: yup
          .string()
          .required('the email is required.')
          .email('enter a valid email.'),
        password: yup.string().required('the password is required.')
      })
    ),
    mode: 'all'
  });

  const onSubmit: SubmitHandler<FormValues> = async values => {
    const { data } = await login({
      input: values
    });
    if (data) {
      await axios.post('/api/auth', { token: data.login.token });
      setToken(data.login.token);
      await router.push('/');
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="calc(100vh - 5rem)"
      width="full"
    >
      <Box
        borderWidth={1}
        borderRadius={4}
        width="full"
        maxWidth={500}
        mx={5}
        p={4}
        boxShadow="lg"
      >
        <Heading textAlign="center" fontSize="3xl" mb={5}>
          Sign In
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                ref={register}
                name="email"
                type="email"
                placeholder="Email"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                ref={register}
                type="password"
                placeholder="*******"
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Button isLoading={fetching} type="submit" variantColor="purple">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginForm;
