import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./userSlice";
import { userApi } from "../../api/index";

function* fetchUsersWorker() {
  try {
    const users = yield call(userApi.fetchUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(fetchUsersStart.type, fetchUsersWorker);
}
