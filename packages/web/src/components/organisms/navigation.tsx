import { Flex, Stack, Input } from '@chakra-ui/core';

import ThemeButton from '@Atoms/theme-button';
import Logo from '@Atoms/logo';
import MenuButton from '@Atoms/menu-button';
import AuthButtons from '@Molecules/auth-buttons';

const Navigation: React.FC = () => {
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
      <Logo />

      <Input
        alignSelf="flex-end"
        width="sm"
        mx={{ sm: 5 }}
        placeholder="Search"
      />

      <MenuButton />
      <ThemeButton display={{ md: 'none' }} />

      <Stack isInline spacing={5} display={{ sm: 'none', md: 'flex' }}>
        <ThemeButton />
        <AuthButtons />
      </Stack>
    </Flex>
  );
};

export default Navigation;
