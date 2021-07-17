export const login = (obj)=>{

    return (dispatch) =>{
        dispatch({
            type: "login",
            payload: obj
        })
    }

}

export const logout = (obj)=>{

    return (dispatch) =>{
        dispatch({
            type: "logout",
            payload: obj
        })
    }

}