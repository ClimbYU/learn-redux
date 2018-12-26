import { BORROWFROMLIB1, BORROWFROMLIB2, BORROWFROMMARY, REVERTLIBRARY, BORROWFROMBOB, CHANGECOLOR } from '../constant'

const defaultState = {
    numBob: 2,
    numMary: 3,
    color: '#108ee9',
    total: 20
}

export default (state = defaultState, actions) => {
    const { numBob, numMary, total } = state
    switch (actions.type) {
        case BORROWFROMLIB1:
            return {
                ...state,
                numBob: numBob + 1,
                total: total - 1
            }
        case BORROWFROMLIB2:
            return {
                ...state,
                numMary: numMary + 1,
                total: total - 1
            }
        case BORROWFROMMARY:
            return {
                ...state,
                numBob: numBob + 1,
                numMary: numMary - 1,
            }
        case REVERTLIBRARY:
            return {
                ...state,
                numBob: numBob - 1,
                total: total + 1
            }
        case BORROWFROMBOB:
            return {
                ...state,
                numBob: numBob - 1,
                numMary: numMary + 1,
            }
        case CHANGECOLOR:
            return {
                ...state,
                color: '#92e6ea'
            }
        default:
            return state

    }
}