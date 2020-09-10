import { Stack } from '@chakra-ui/core';

import NavLink from '@Atoms/nav-link';

const NavLinks: React.FC = () => {
  return (
    <Stack>
      <NavLink href="/">Home</NavLink>
    </Stack>
  );
};

export default NavLinks;
