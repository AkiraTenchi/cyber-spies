const reducer = (state = null, action) =>{

    switch(action.type){

        case "login":
            return action.payload;
            break;
        case "logout":
            return null;
            break;
        default:
            return state;
            break;
    }

}


export default reducer;