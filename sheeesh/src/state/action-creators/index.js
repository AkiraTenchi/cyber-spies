import {store} from '../store';

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

export const update = (obj)=>{

    return (dispatch) =>{
        if(store.getState().account != null){
           
        fetch("/users/"+store.getState().account.username, 
            {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            }).then(res =>{
               return res.json()
            }).then(resJson => {
               // console.log(resJson)
                dispatch({
                    type: "update",
                    payload: {
                        "username": resJson.username,
                        "coins": resJson.coins,
                        "rewardsVouchers": resJson.rewardsVouchers
                    }
                })
            });
        } else{
            dispatch({
                type: null,
                payload: null
            })
        }
    }

}