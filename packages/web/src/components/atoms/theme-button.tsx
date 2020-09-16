import {
  useColorMode,
  IconButton,
  IconButtonProps,
  useColorModeValue
} from '@chakra-ui/core';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeButton: React.FC<Omit<IconButtonProps, 'aria-label'>> = props => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <IconButton
      aria-label="change color theme"
      icon={icon}
      onClick={toggleColorMode}
      variant="ghost"
      colorScheme="purple"
      {...props}
    />
  );
};

export default ThemeButton;
