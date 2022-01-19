import { AppProps } from 'next/app';
import '../styles/global.css';
import { Layout } from '@components/layout/Layout';


function CustomApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default CustomApp;
