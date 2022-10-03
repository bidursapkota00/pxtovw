import { call, put, takeLatest } from "redux-saga/effects";
import { requestGetTags } from "../requests/tags";
import { setTagsError, setTagsData, getTagsData } from "../../ducks/tags";

export function* handleGetAllTags({ type, payload: { loadingVariable } }) {
  try {
    const { data } = yield call(requestGetTags);
    yield put(setTagsData({ data, type: loadingVariable }));
  } catch (error) {
    yield put(setTagsError({ error, type: loadingVariable }));
  }
}

export function* loadAllTagsData() {
  yield takeLatest(getTagsData.type, handleGetAllTags);
}
