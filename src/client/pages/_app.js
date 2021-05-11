import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { createWrapper } from 'next-redux-wrapper';
import Layout from '../components/Layout';
import 'normalize.css';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

export async function getStaticProps() {
  return {
    props: {},
  };
}
