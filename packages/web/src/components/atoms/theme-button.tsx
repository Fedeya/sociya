import { useColorMode, IconButton, IconButtonProps } from '@chakra-ui/core';

const ThemeButton: React.FC<Omit<IconButtonProps, 'aria-label'>> = props => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      aria-label="change color theme"
      icon={colorMode === 'light' ? 'moon' : 'sun'}
      onClick={toggleColorMode}
      variant="ghost"
      variantColor="purple"
      {...props}
    />
  );
};

export default ThemeButton;
