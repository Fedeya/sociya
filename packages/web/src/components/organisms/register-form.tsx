import { useContext } from 'react';
import {
  Flex,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
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

import { useRegisterMutation } from '@Generated/graphql';
import { AuthContext } from '@Context/auth/auth-context';

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const [{ fetching }, registerMutation] = useRegisterMutation();
  const { setToken } = useContext(AuthContext);
  const router = useRouter();

  const { register, errors, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(
      yup.object({
        username: yup.string().required('the username is required.'),
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
    const { data } = await registerMutation({
      input: values
    });
    if (data) {
      await axios.post('/api/auth', { token: data.register.token });
      setToken(data.register.token);
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
          Register
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <FormControl isInvalid={!!errors.username}>
              <FormLabel>Username</FormLabel>
              <Input ref={register} name="username" placeholder="Username" />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
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
                ref={register}
                name="password"
                type="password"
                placeholder="*******"
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Button isLoading={fetching} type="submit" variantColor="purple">
              Create Account
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
