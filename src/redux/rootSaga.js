import { all, call } from "redux-saga/effects";
import { watchFetchUsers } from "../features/user/userSaga";
import { watchFetchBarbers } from "../features/barber/barberSaga";

export default function* rootSaga() {
  yield all([call(watchFetchUsers), call(watchFetchBarbers)]);
}
