import { useState, useEffect } from 'react';
import { Spinner, Flex, Box } from '@chakra-ui/core';
import Router from 'next/router';
import Head from 'next/head';

import Navigation from '@Organisms/navigation';
import Sidebar from '@Organisms/sidebar';
import Drawer from '@Organisms/drawer';
import SidebarProvider from '../../context/sidebar/sidebar-context';

const Layout: React.FC<{ title?: string }> = ({ children, title }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <SidebarProvider>
      <Head>
        <title>{title || 'Sociya'}</title>
      </Head>
      <Navigation />
      <Flex>
        <Sidebar />
        <Drawer />
        {loading ? (
          <Flex
            justifyContent="center"
            align="center"
            width="full"
            minHeight="90vh"
          >
            <Spinner size="xl" />
          </Flex>
        ) : (
          <Box width="full">
            <main>{children}</main>
          </Box>
        )}
      </Flex>
    </SidebarProvider>
  );
};

export default Layout;
