import { applyMiddleware, createStore } from "redux"
import { createBrowserHistory } from "history"
import createRootReducer from "./reducers"
import { routerMiddleware } from "connected-react-router"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import rootSaga from "./sagas/rootSaga"

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
)

sagaMiddleware.run(rootSaga)

export default store