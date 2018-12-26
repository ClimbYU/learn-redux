import { LOGIN } from '../constant'

const defaultState = {
    users: {}
}

export default (state = defaultState, action) => {
    let { users } = defaultState
    switch (action.type) {
        case LOGIN:
            users[action.payload] = true
            return {
                ...state,
                users: users
            }
        default:
            return state

    }
}