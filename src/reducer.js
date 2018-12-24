import {BORROWFROMLIB,BORROWFROMMARY,REVERTLIBRARY} from './constant'

const defaultState = {
    numBob:2,
    numMary:3,
    color:'red',
    total:20
}

export default (state = defaultState, actions) => {
    const {numBob, numMary, total} = state
    switch(actions.type){
        case BORROWFROMLIB:
            return{
                ...state,
                numBob:numBob + 1,
                totla:total - 1
            }
        case BORROWFROMMARY:
            return{
                ...state,
                numBob:numBob + 1,
                numMary: numMary - 1,
            }
        case REVERTLIBRARY:
            return{
                ...state,
                numBob:numBob - 1,
                totla:total + 1
            }
        default:
            return state

    }
}