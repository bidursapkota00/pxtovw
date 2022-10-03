import {call, put, takeLatest} from "redux-saga/effects";
import {requestTestData} from "./api";
import {fetchDataError, fetchDataSuccess} from "./actions";
import {REQUEST_DATA} from "./constants";

export function* handleTestData({type, payload}) {
    try {
        const {data} = yield call(requestTestData, payload);
        yield put(fetchDataSuccess(data));
    } catch (err) {
        yield put(fetchDataError(err));
    }
}

export function* loadTestReduxData() {
    yield takeLatest(REQUEST_DATA, handleTestData);
}