import { useContext } from 'react';
import {
  Box,
  Stack,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from '@chakra-ui/core';

import NavLink from '@Atoms/nav-link';
import { SidebarContext } from '../../context/sidebar/sidebar-context';

const Sidebar: React.FC = () => {
  const { isOpen, onClose, menuRef } = useContext(SidebarContext);

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
      <Stack>
        <NavLink href="/">Home</NavLink>
      </Stack>
      <Drawer
        placement="left"
        finalFocusRef={menuRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Stack>
              <NavLink href="/">Home</NavLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
