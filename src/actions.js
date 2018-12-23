import {ADDBOOK,REMOVEBOOK,ADDBOOKASYNC} from './constant'

export const addBook = () => {
    return {type:ADDBOOK}
}

export const removeBook = () => {
    return {type:REMOVEBOOK}
}

export const getBookAsync = () => {
    console.log('dispatch')
    return (dispatch) => {
        setTimeout(() => {
            console.log(dispatch)
            dispatch(addBook())
        },1000)
    }
}