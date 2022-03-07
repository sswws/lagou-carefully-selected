import {takeEvery, put} from "redux-saga/effects"
import {signup, signup_fail, signup_success} from "../actions/signup"
import axios from "axios"
import { API } from '../../config'

function* handleSignup(action) {
    try {
        yield axios.post(`${API}/signup`, action.payload)
        yield put(signup_success())
    } catch (ex) {
        yield put(signup_fail({ message: ex.response.data.error }))
    }
}

export default function* signupSaga () {
    yield takeEvery(signup, handleSignup)
}