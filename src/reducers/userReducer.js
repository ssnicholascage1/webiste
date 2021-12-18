export const userLoginReducer = (state={}, action) =>{
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return{loading:true}
        case "USER_LOGIN_SUCCESS":
            return{loading:false, userInfo:action.payload}
        case "USER_LOGIN_FAILURE":
            return{loading:false, error:action.payload}
        case "USER_LOGIN_LOGOUT":
            return{}           
        default:
            return state;
    }
}
export const userSignUpReducer = (state={}, action) =>{
    switch (action.type) {
        case "USER_SIGN_UP_REQUEST":
            return{loading:true}
        case "USER_SIGN_UP_SUCCESS":
            return{loading:false, userInfo:action.payload}
        case "USER_SIGN_UP_FAILURE":
            return{loading:false, error:action.payload}        
        default:
            return state;
    }
}