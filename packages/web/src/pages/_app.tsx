import { AppProps } from 'next/app';
import { ChakraProvider, theme } from '@chakra-ui/core';
import { Provider } from 'urql';

import { useUrql } from '@Lib/urql';
import AuthProvider from '@Context/auth/auth-context';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = useUrql();

  return (
    <Provider value={client}>
      <AuthProvider token={pageProps.token}>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
