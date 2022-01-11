import { AppProps } from 'next/app';
import './styles.css';
import '../styles/global.css';
import { Layout } from '@components/Layout/Layout';

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
