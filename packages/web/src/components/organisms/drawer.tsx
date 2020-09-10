import { useContext } from 'react';
import {
  Stack,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerFooter
} from '@chakra-ui/core';

import AuthButtons from '@Molecules/auth-buttons';
import NavLinks from '@Molecules/nav-links';
import { SidebarContext } from '@Context/sidebar/sidebar-context';

const Drawer: React.FC = () => {
  const { isOpen, onClose, menuRef } = useContext(SidebarContext);

  return (
    <ChakraDrawer
      placement="left"
      finalFocusRef={menuRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <NavLinks />
        </DrawerBody>
        <DrawerFooter>
          <Stack isInline w="full" justifyContent="center">
            <AuthButtons />
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default Drawer;
