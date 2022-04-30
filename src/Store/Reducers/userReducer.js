import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../Actions/userAction";


const initialState={
    currentUser:null,
    isRegister:false,
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
         case REGISTER_USER:
             console.log(action.isRegister)  
             return{ 
                ...state, 
                isRegister: action.isRegister,
            }
        case LOGOUT_USER:
            return initialState;

    }

    return state;

}


export default userReducer;