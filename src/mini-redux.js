/**
 * 
 * createStore
 * applyMiddleware, combineReducers, compose,
 * getState, subscribe, dispatch
 * 
 */

let dispatchAction = {}

const createAction = (dispatch,action) => {
    return (...args) => dispatch(action(...args))
}

export const createActions = (dispatch, actions) => {
    Object.keys(actions).forEach(v => {
        dispatchAction[v] = createAction(dispatch,actions[v])
    })

    return dispatchAction
}

export const createStore = (reducer, enhancer) => {
    if(enhancer){
      return enhancer(createStore)(reducer)
    }
    let currentStore
    let currentAction = []
    function getState(){
        return currentStore
    }

    function subscribe(listener){
        currentAction.push(listener)
    }

    function dispatch(action){
        currentStore = reducer(currentStore, action)
        currentAction.forEach(v => v())
        
        return action
    }

    dispatch({type:'@REDUX/STORE/INIT'})

    return {getState, subscribe, dispatch}

}


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
        // fn1(fn2(fn3))
        // console.log(dispatch)
        return {
            ...store,
            dispatch
        }
    }
}

export const compose = (...funcs) => {
    if (funcs.length === 0) {
        return arg => arg
      }
    
      if (funcs.length === 1) {
        return funcs[0]
      }
    
      return funcs.reduce((a, b) => (...args) => a(b(...args)))
}


