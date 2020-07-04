import {applyMiddleware, createStore} from 'redux'
import appReducer from "./redux/reducer";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./redux/saga";
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    appReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export default store