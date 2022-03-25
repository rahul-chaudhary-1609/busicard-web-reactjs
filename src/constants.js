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
    uploadFile:'/client/uploadFile',
    forgotPassword:'/client/forgotPassword',
    resetPassword:'/client/setNewPassword',
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


/**
 * CSS Constants
 */

export const customTheme={
    colors:{
        theme_color_1: "#ffffff",
        theme_color_2: "#0869C8",
        theme_color_3: "#75B9B1",
        theme_color_4: "#000000",
        theme_color_5: "#E9F4FF",
        theme_color_6: "rgba(0,0,0,0.7)",
        theme_color_7: "rgba(0,0,0,0.1)", 
        theme_color_8: "rgba(0,0,0,0.4)", 
    }
}