// redux/reducers/index.ts
import { combineReducers } from "redux";
import { createRouterReducer } from "@lagunovsky/redux-react-router";
import { browserHistory } from "./history";
import homeReducer from "./default";
import movieReducer from "./movie";
import serieReducer from "./serie";

const rootReducer = combineReducers({
  router: createRouterReducer(browserHistory),
  homeReducer,
  movieReducer,
  serieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
