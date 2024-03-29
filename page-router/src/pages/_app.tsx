import type {AppType} from 'next/app';
import {api} from '../utils/api';

const MyApp: AppType = ({Component, pageProps}) => {
  return (
    <>
      {/*<ReactQueryDevtools />*/}
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
