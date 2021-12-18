import axios from "axios";

export const login = (email, password) => async(dispatch) =>{
    try {
        dispatch({type:"USER_LOGIN_REQUEST"})
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.post("/user/login", {email, password}, config)
        localStorage.setItem("userInfo", JSON.stringify(data))
        dispatch({type:"USER_LOGIN_SUCCESS", payload:data})

    } catch (error) {
        dispatch({type:"USER_LOGIN_FAILURE", payload:error})
        console.log(error);
    }
}

//USER_LOGIN_LOGOUT
export const logout = ()=> async(dispatch)=>{
    localStorage.removeItem("userInfo")
    dispatch({type:"USER_LOGIN_LOGOUT"})
}

//signUp
export const register = (name, email, password) => async(dispatch) =>{
    try {
        dispatch({type:"USER_SIGN_UP_REQUEST"})
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.post("/user", {name, email, password}, config)
        dispatch({type:"USER_SIGN_UP_SUCCESS", payload:data})

    } catch (error) {
        dispatch({type:"USER_SIGN_UP_FAILURE", payload:error})
        console.log(error);
    }
}