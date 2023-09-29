import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchBarbersStart,
  fetchBarbersSuccess,
  fetchBarbersFailure,
} from "./barberSlice";
import { firebaseApi } from "../../api/index";

function* fetchBarbersWorker() {
  try {
    const barbers = yield call(firebaseApi.getCollection, "barbers");
    yield put(fetchBarbersSuccess(barbers));
  } catch (error) {
    yield put(fetchBarbersFailure(error.message));
  }
}

export function* watchFetchBarbers() {
  yield takeLatest(fetchBarbersStart.type, fetchBarbersWorker);
}
