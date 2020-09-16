import { useMemo } from 'react';
import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ssrExchange,
  Client
} from 'urql';
import { NextPageContext, GetServerSidePropsContext } from 'next';
import Cookie from 'cookies';

let urqlClient: Client;

const isServer = typeof window === 'undefined';

let ssr = ssrExchange({
  isClient: !isServer,
  initialState: undefined
});

const createUrqlClient = (
  data: any,
  ctx?: NextPageContext | GetServerSidePropsContext
) => {
  ssr = ssrExchange({
    isClient: !isServer,
    initialState: data
  });
  return createClient({
    exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
    fetchOptions: () => {
      if (isServer && ctx) {
        const cookie = new Cookie(ctx.req!, ctx.res!);
        const token = cookie.get('token');

        return {
          headers: {
            authorization: `Bearer ${token}` ?? ''
          }
        };
      }

      return {};
    },
    url: 'http://localhost:4000'
  });
};

export const getClient = (
  ctx?: NextPageContext | GetServerSidePropsContext
) => {
  const _urqlClient = urqlClient ?? createUrqlClient(ssr.extractData(), ctx);

  if (isServer) return _urqlClient;
  if (!urqlClient) urqlClient = _urqlClient;

  return _urqlClient;
};

export const useUrql = (): Client => {
  const store = useMemo(() => getClient(), []);
  return store;
};
