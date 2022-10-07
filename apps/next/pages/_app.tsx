import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { useMemo } from 'react';
import { trpc } from '@my/trpc-client';
import { Provider } from 'app/provider'
import 'raf/polyfill'

const MyApp: AppType = ({ Component, pageProps }) => {
    const [theme, setTheme] = useRootTheme()
    const contents = useMemo(() => {
    return <Component {...pageProps} />
  }, [Component, pageProps]);


    return (
    <>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextThemeProvider onChangeTheme={setTheme}>
        <Provider disableRootThemeClass defaultTheme={theme}>
          {contents}
        </Provider>
      </NextThemeProvider>
    </>
  )
};

export default trpc.withTRPC(MyApp);