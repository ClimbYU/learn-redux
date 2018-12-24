import {BORROWFROMLIB,BORROWFROMMARY,REVERTLIBRARY} from './constant'

export const borrowFromLib = () => {
    return {type:BORROWFROMLIB}
}

export const borrowFromMary = () => {
    return {type:BORROWFROMMARY}
}

export const revertLibrary = () => {
    return {type:REVERTLIBRARY}
}

export const revertToLibAsync = () => {
    console.log('dispatch')
    return (dispatch) => {
        setTimeout(() => {
            console.log(dispatch)
            dispatch(revertLibrary())
        },1000)
    }
}