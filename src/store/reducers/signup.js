import { handleActions } from "redux-actions"
import {signup, signup_fail, signup_reset, signup_success} from "../actions/signup"

const initialState = {
    loading: false,
    loaded: false,
    success: false,
    message: ""
}

const signupReducer = handleActions({
    [signup]: () => ({
        loading: true,
        loaded: false,
        success: false,
        message: ""
    }),
    [signup_success]: () => ({
        loading: false,
        loaded: true,
        success: true,
        message: ""
    }),
    [signup_fail]: (state, action) => ({
        loading: false,
        loaded: true,
        success: false,
        message: action.payload.message
    }),
    [signup_reset()]: () => ({
        loading: false,
        loaded: false,
        success: false,
        message: ""
    })
    },
    initialState
)

export default signupReducer