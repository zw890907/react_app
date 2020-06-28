// 合并多有的reducer
import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import thunk from 'redux-thunk'
// import { reducer as loginReducer } from '../pages/login/store'
import { reducer as headerReducer } from '../components/Header/store'

const reducer = combineReducers({
    // login: loginReducer,
    header: headerReducer
})

// 这里让项目支持浏览器插件Redux DevTools
const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(
    reducer,
    enhancer
)

export default store

// export default reducer
