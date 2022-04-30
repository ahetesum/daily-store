import { decipher } from "../../Helpers/CryptoHelper";

export const LOGIN_USER='LOGIN_USER';
export const LOGOUT_USER='LOGOUT_USER';
export const REGISTER_USER='REGISTER_USER';



export const loginUser=(username,password)=>{
    return async (dispatch,getState) =>{
        const response= await fetch(
            "https://daily-store-8f1fb-default-rtdb.asia-southeast1.firebasedatabase.app/user.json?",
            {
                method : "GET",
            }
        );

        const resData= await response.json();
        const listofUsers = Object.entries(resData).map(([id, item]) => ({ id, name:item.name ,email:item.email,password:item.password}));
        const currentUser= listofUsers.find(u=>u.email===username);

        if(currentUser)
            if(decipher(currentUser.password)===password)
            {
                dispatch({type:LOGIN_USER,currentUser});
            }
    }
}


export const registerUser=(name,email,password)=>{
    return async ( dispatch,getState) =>{

        const response= await fetch(
            'https://daily-store-8f1fb-default-rtdb.asia-southeast1.firebasedatabase.app/user.json',
            {
                method : "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                })
            }
        );

        const resData= await response.json();
        console.log(JSON.stringify(resData));
        let isRegister=false;
        if(resData && resData.name)
        {
            isRegister=true;
        }
        dispatch({type:REGISTER_USER,isRegister})

    }
}


export const logOut=(dispatch)=>{

    dispatch({type:LOGOUT_USER});

    
}