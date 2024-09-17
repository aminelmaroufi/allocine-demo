import adapter from '../adapter';

const REACT_APP_NODE_ENV = process.env.NODE_ENV;

const errorInterceptor = () => {
  adapter.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        window.location.href = '/500';
        return Promise.reject(error);
      } else if (error.response && error.response.status === 500) {
        window.location.href = '/500';
        return Promise.reject(error);
      } else {
        if (REACT_APP_NODE_ENV !== 'production') {
          console.group('Error');
          console.log(error);
          console.groupEnd();
        }
        return Promise.reject(error.response);
      }
    }
  );
};

export default errorInterceptor;
