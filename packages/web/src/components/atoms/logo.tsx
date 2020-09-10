import { Link as ChakraLink } from '@chakra-ui/core';
import NextLink from 'next/link';

const Logo: React.FC = () => {
  return (
    <NextLink href="/" passHref>
      <ChakraLink fontSize="2xl">Sociya</ChakraLink>
    </NextLink>
  );
};

export default Logo;
