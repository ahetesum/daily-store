import { LOGIN_USER, LOGOUT_USER } from "../Actions/userAction";


const initialState={
    currentUser:null,
};

 const userReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case LOGIN_USER:
            console.log(JSON.stringify(action))
            return{ 
                ...state, 
                currentUser: action.currentUser,
            }
        case LOGOUT_USER:
            console.log('LOGOUT_USER')
            return initialState;

    }

    return state;

}


export default userReducer;