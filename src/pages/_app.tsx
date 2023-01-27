import { ExternalFonts } from '@/assets/fonts';
import { Layout } from '@/layouts/Layout';
import { theme } from '@/themes';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ExternalFonts />
      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
