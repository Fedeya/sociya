import { useContext } from 'react';
import { Button } from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

import { AuthContext } from '@Context/auth/auth-context';

const AuthButtons: React.FC = () => {
  const { auth, setToken } = useContext(AuthContext);
  const router = useRouter();

  const handleClick = async () => {
    await axios.post('/api/auth', { token: '' });
    setToken('');
    await router.push('/login');
  };

  if (auth) {
    return (
      <Button onClick={handleClick} variantColor="purple">
        Logout
      </Button>
    );
  }

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
