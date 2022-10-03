import '../styles/globals.css';
import 'antd/dist/antd.css';
import Layout from '../components/layout';
import {wrapper} from '../redux/store/configureStore';

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </>
  );
}

export default wrapper.withRedux(WrappedApp);
