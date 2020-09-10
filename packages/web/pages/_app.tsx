import { AppProps } from 'next/app';
import {
  ThemeProvider,
  theme,
  CSSReset,
  ColorModeProvider
} from '@chakra-ui/core';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
