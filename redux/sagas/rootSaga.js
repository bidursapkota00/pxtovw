import {all } from "redux-saga/effects";

//handlers
import {loadAllTagsData} from "./handlers/tags";

/* ------------------------------ watcher here ------------------------------ */
export function* watcherSaga() {
  yield all([
      loadAllTagsData(),
  ]);
}
