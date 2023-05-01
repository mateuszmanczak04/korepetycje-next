import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import store from '@/redux/store';
import { Provider } from 'react-redux';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Korepetycje - Mateusz Mańczak</title>
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </Layout>
  );
}
