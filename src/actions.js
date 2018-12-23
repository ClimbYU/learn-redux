import {ADDBOOK,REMOVEBOOK,ADDBOOKASYNC} from './constant'

export const addBook = () => {
    return {type:ADDBOOK}
}

export const removeBook = () => {
    return {type:REMOVEBOOK}
}

export const getBookAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addBook())
        },2000)
    }
}