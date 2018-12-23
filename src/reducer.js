import {ADDBOOK,REMOVEBOOK} from './constant'

const defaultState = {
    num:10,
    anotherNum:15
}

export default (state = defaultState, actions) => {
    const {num, anotherNum} = state
    switch(actions.type){
        case ADDBOOK:
            return{
                num:num + 1,
                anotherNum: anotherNum - 1
            }
        case REMOVEBOOK:
            return{
                num:num - 1,
                anotherNum: anotherNum + 1
            }
        default :
            return state    
            
    }
}