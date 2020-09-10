import { Button } from '@chakra-ui/core';
import Link from 'next/link';

const AuthButtons: React.FC = () => {
  return (
    <>
      <Link href="/login" passHref>
        <Button as="a" mr={3} variantColor="purple">
          Login
        </Button>
      </Link>
      <Link href="/register" passHref>
        <Button as="a" variantColor="purple" variant="outline">
          Register
        </Button>
      </Link>
    </>
  );
};

export default AuthButtons;
