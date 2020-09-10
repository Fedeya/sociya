import { createContext, useRef, MutableRefObject } from 'react';
import { useDisclosure } from '@chakra-ui/core';

interface SidebarState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  menuRef: MutableRefObject<null>;
}

export const SidebarContext = createContext({} as SidebarState);

const SidebarProvider: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuRef = useRef(null);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        menuRef
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
