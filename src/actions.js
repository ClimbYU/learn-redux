import {BORROWFROMLIB1, BORROWFROMLIB2, BORROWFROMMARY,REVERTLIBRARY,BORROWFROMBOB, CHANGECOLOR} from './constant'

export const borrowFromLibMary = () => {
    return {type:BORROWFROMLIB2}
}

export const borrowFromLibBob = () => {
    return {type:BORROWFROMLIB1}
}

export const borrowFromMary = () => {
    return {type:BORROWFROMMARY}
}

export const revertToLib = () => {
    return {type:REVERTLIBRARY}
}

export const borrowFromBob = () => {
    return {type:BORROWFROMBOB}
}

export const changeColor = () => {
    return {type:CHANGECOLOR}
}

export const revertToLibAsync = () => {
    console.log('dispatch')
    return (dispatch) => {
        setTimeout(() => {
            console.log(dispatch)
            dispatch(revertToLib())
        },1000)
    }
}