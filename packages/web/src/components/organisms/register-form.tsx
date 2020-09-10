import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Button,
  Stack,
  Box,
  Heading
} from '@chakra-ui/core';

const RegisterForm: React.FC = () => {
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
          Register
        </Heading>
        <form>
          <Stack>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
            <Button variantColor="purple">Create Account</Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
