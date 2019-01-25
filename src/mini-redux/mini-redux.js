/**
 * 
 * createStore
 * applyMiddleware, combineReducers, compose,
 * getState, subscribe, dispatch
 * 
 */

let dispatchAction = {}

const createAction = (dispatch, action) => {
    return (...args) => dispatch(action(...args))
}

/**
 * 
 * @param {Function} dispatch 
 * @param {Object} actions 
 */
export const createActions = (dispatch, actions) => {
    // 将actions解析为以各个action为key的对象
    Object.keys(actions).forEach(v => {
        dispatchAction[v] = createAction(dispatch, actions[v])
    })

    return dispatchAction
}
/**
 * 
 * @param {Function} reducer 
 * @param {Function} enhancer
 */
export const createStore = (reducer, enhancer) => {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let currentStore
    let currentAction = []
    function getState() {
        return currentStore
    }

    function subscribe(listener) {
        currentAction.push(listener)
    }

    function dispatch(action) {
        currentStore = reducer(currentStore, action)
        currentAction.forEach(v => v())

        return action
    }
    // 需要触发一次用于state的初始化
    dispatch({ type: '@REDUX/STORE/INIT' })

    return { getState, subscribe, dispatch }

}

/**
 * 
 * @param  {Array} middlewares 
 */
export const applyMiddleware = (...middlewares) => {
    return createStore => (...args) => {
        const store = createStore(...args)
        let dispatch = store.dispatch

        const midApi = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        }

        // dispatch = middleware(midApi)(store.dispatch)
        let middlewareChain = middlewares.map(middleware => middleware(midApi))
        dispatch = compose(...middlewareChain)(store.dispatch)
        return {
            ...store,
            dispatch
        }
    }
}

export const compose = (...funcs) => {
    if (funcs.length == 0) {
        return arg => arg
    }
    if (funcs.length == 1) {
        return funcs[0]
    }
    return funcs.reduce((ret, item) => (...args) => ret(item(...args)))
}
// dispatch = f1(f2(f3(store.dispatch))));
// 另一种写法
// function compose(...funcs) {
//     return arg => funcs.reduceRight((composed, f) => f(composed), arg);
// }

export const combineReducers = (reducers) => {
    const reducerKeys = Object.keys(reducers)
    const finalReducers = {}
    for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i]

        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key]
        }
    }
    const finalReducerKeys = Object.keys(finalReducers)
    return function combination(state = {}, action) {

        let hasChanged = false
        const nextState = {}
        for (let i = 0; i < finalReducerKeys.length; i++) {
            const key = finalReducerKeys[i]
            const reducer = finalReducers[key]
            const previousStateForKey = state[key]
            const nextStateForKey = reducer(previousStateForKey, action)
            nextState[key] = nextStateForKey
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey
        }
        return hasChanged ? nextState : state
    }
}