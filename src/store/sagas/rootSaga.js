import { all } from "redux-saga/effects"
import signupSaga from "./signup"

export default function* rootSaga() {
    yield all([signupSaga()])
}