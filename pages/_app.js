import '@/styles/globals.css'
import Layout from '@/component/Layout/Layout'
import StateContext from '@/contextHook/StateContext'


export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}