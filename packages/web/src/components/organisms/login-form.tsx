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

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
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

  const onSubmit: SubmitHandler<FormValues> = values => {
    console.log('login values:', values);
  };

  return (
    <Flex justifyContent="center" alignItems="center" minH="90vh" width="full">
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
            <Button type="submit" variantColor="purple">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginForm;
