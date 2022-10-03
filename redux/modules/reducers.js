// @flow

import { combineReducers } from "redux";

//ducks
import tagsReducer from "../ducks/tags";

export const reducers = {
  tags: tagsReducer,
};

const appReducer = combineReducers({
  ...reducers,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
