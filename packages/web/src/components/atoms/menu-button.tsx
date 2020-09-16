import { useContext } from 'react';
import { IconButton } from '@chakra-ui/core';
import { FaBars } from 'react-icons/fa';

import { SidebarContext } from '@Context/sidebar/sidebar-context';

const MenuButton: React.FC = () => {
  const { onOpen, menuRef } = useContext(SidebarContext);

  return (
    <IconButton
      aria-label="open menu"
      icon={<FaBars />}
      variant="ghost"
      display={{ md: 'none' }}
      onClick={onOpen}
      ref={menuRef}
    />
  );
};

export default MenuButton;
