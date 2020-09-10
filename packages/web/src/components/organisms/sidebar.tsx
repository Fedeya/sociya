import { Box } from '@chakra-ui/core';

import NavLinks from '@Molecules/nav-links';

const Sidebar: React.FC = () => {
  return (
    <Box
      display={{ base: 'none', md: 'flex' }}
      pos="sticky"
      overflowY="auto"
      h="91.6vh"
      p={5}
      boxShadow="lg"
      w="250px"
    >
      <NavLinks />
    </Box>
  );
};

export default Sidebar;
