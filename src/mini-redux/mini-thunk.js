
const thunk = ({ getState, dispatch }) => next => action => {
    if (typeof action == 'function') {
        return action(dispatch, getState)
    }
    return next(action) // 下一个中间件执行
}

export default thunk