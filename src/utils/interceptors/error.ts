import { browserHistory } from "../../redux/reducers/history";
import ActionTypes from "../../utils/actionTypes";
import adapter from "../adapter";

const REACT_APP_NODE_ENV = process.env.NODE_ENV;

const errorInterceptor = (store: any) => {
  adapter.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        return browserHistory.push("/500");
      } else if (error.response && error.response.status === 500) {
        //Unauthorized
        //redirect to 500 page
        return browserHistory.push("/500");
      } else {
        //dispatch your error in a more user friendly manner
        if (REACT_APP_NODE_ENV !== "production") {
          //easier debugging
          console.group("Error");
          console.log(error);
          console.groupEnd();
        }
        return error.response;
      }
    }
  );
};
export default errorInterceptor;
