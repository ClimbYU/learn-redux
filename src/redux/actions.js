import { BORROWFROMLIB1, BORROWFROMLIB2, BORROWFROMMARY, REVERTLIBRARY, BORROWFROMBOB, CHANGECOLOR, LOGIN } from '../constant'

export const borrowFromLibMary = () => {
    return { type: BORROWFROMLIB2 }
}

export const borrowFromLibBob = () => {
    return { type: BORROWFROMLIB1 }
}

export const borrowFromMary = () => {
    return { type: BORROWFROMMARY }
}

export const revertToLib = () => {
    return { type: REVERTLIBRARY }
}

export const borrowFromBob = () => {
    return { type: BORROWFROMBOB }
}

export const changeColor = () => {
    return { type: CHANGECOLOR }
}

export const login = (user) => {
    return { type: LOGIN, payload: user }
}

export const revertToLibAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(revertToLib())
        }, 1000)
    }
}