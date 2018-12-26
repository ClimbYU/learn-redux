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
 * @param {用于触发action由connect高阶组件传入}}} dispatch 
 * @param {需要触发的action组合} actions 
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
 * @param {state：全局的状态} reducer 
 * @param {增强器用于加载中间件} enhancer 
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
 * @param  {中间件集合} middlewares 
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