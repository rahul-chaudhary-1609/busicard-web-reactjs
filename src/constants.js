/**
 * redux constants
 */

//action constants

export const actions={
    LOGGED_IN:"login",
    LOGGED_OUT:"logout"
}



/**
 * API constants
 */

export const baseURL='http://52.203.53.80/api/v1'

export const apiConstants={
    signUp:'/client/signUp',
    signIn:'/client/login',
    uploadFile:'/client/uploadFile'
}



/**
 * Toast Constants
 */

export const toastType={
    info:1,
    success:2,
    warning:3,
    error:4,
    default:5
}