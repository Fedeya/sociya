import { useRef, useContext } from 'react';
import {
  Flex,
  Link,
  Stack,
  IconButton,
  useColorMode,
  Input,
  Button
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { FaBars } from 'react-icons/fa';

import { SidebarContext } from '../../context/sidebar/sidebar-context';

const Navigation: React.FC = () => {
  const { onOpen, menuRef } = useContext(SidebarContext);
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      p={5}
      px={10}
      justifyContent="space-between"
      align="center"
      width="full"
      boxShadow="md"
    >
      <Flex align="center">
        <NextLink href="/">
          <Link fontSize="2xl">Sociya</Link>
        </NextLink>
      </Flex>
      <Input
        alignSelf="flex-end"
        width="sm"
        mx={{ sm: 5 }}
        placeholder="Search"
      />
      <IconButton
        aria-label="open menu"
        icon={FaBars}
        variant="ghost"
        display={{ md: 'none' }}
        onClick={onOpen}
        ref={menuRef}
      />

      <Stack isInline spacing={5} display={{ sm: 'none', md: 'flex' }}>
        <IconButton
          aria-label="change color theme"
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          onClick={toggleColorMode}
          variant="ghost"
          variantColor="purple"
        />
        <NextLink href="/login" passHref>
          <Button as="a" mr={3} variantColor="purple">
            Login
          </Button>
        </NextLink>
        <NextLink href="/register" passHref>
          <Button as="a" variantColor="purple" variant="outline">
            Register
          </Button>
        </NextLink>
      </Stack>
    </Flex>
  );
};

export default Navigation;
