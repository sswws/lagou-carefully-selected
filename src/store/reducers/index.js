import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import signupReducer from "./signup"
import testReducer from "./test"

const createRootReducer = history =>
    combineReducers({
        test: testReducer,
        router: connectRouter(history),
            signup: signupReducer

})

export default createRootReducer