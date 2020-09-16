import { AppProps } from 'next/app';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core';
import { Provider } from 'urql';

import { useUrql } from '@Lib/urql';
import AuthProvider from '@Context/auth/auth-context';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = useUrql();

  return (
    <Provider value={client}>
      <AuthProvider token={pageProps.token}>
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <CSSReset />
            <Component {...pageProps} />
          </ColorModeProvider>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
