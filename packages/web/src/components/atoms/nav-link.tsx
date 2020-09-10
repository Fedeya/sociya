import { Link as ChakraLink } from '@chakra-ui/core';
import Link, { LinkProps } from 'next/link';

const NavLink: React.FC<LinkProps> = ({ children, ...linkProps }) => {
  return (
    <Link {...linkProps} passHref>
      <ChakraLink h="auto" w="full">
        {children}
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
