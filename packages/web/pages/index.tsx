import {
  Link,
  Flex,
  Text,
  Stack,
  Button,
  Box,
  IconButton,
  useColorMode
} from '@chakra-ui/core';

const Home: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex justifyContent="space-between" m={5} align="center">
      <Link>Logo</Link>
      <Stack isInline spacing={8}>
        <Link>Home</Link>
        <Link>Prices</Link>
        <Link>Gallery</Link>
        <Link>About</Link>
      </Stack>
      <Box>
        <IconButton
          aria-label="change color theme"
          variant="ghost"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          mr={2}
        />
        <Button variant="outline">Contact Me</Button>
      </Box>
    </Flex>
  );
};

export default Home;
