import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"
import { cypher } from "../Helpers/CryptoHelper";


export const Regstration = () => {

    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const [isValid,setIsValid]= useState(true);
    const [validationMessage,setValidationMessage]= useState('');



    const completeRegistration=()=>{
       
       if(isFormValid())
       registerNewUser();
    }

    const registerNewUser= async()=>{

        let encryptedPswd= cypher(password);
        console.log(encryptedPswd);

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
                    password:encryptedPswd,
                })
            }
        );

        const resData= await response.json();

        console.log(JSON.stringify(resData))
        if(resData.name)
        {
            nav('/login');
            setValidationMessage("");

        }
        else{
            setValidationMessage("Failed to Create User");
        }

    }


    const isFormValid=()=>{
        if(name.length<3)
        {
            setIsValid(false)
            setValidationMessage("Name is too Short")
            return false;

        }
        else if(!email.includes('@') || !email.includes('.'))
        {
            setIsValid(false)
            setValidationMessage("Email is Not Valid")
            return false;

        }
        else if(password.length<8)
        {
            setIsValid(false)
            setValidationMessage("Password must have 8 Charecter")
            return false;

        }
        else{
            setIsValid(true)
            setValidationMessage("")
            return true;
        }

 
    }

    const nav= useNavigate();

    // useEffect(()=>{
    //     if(loading)
    //     {
    //         return;
    //     }
    //     if(user)
    //     {
    //         nav('/');
    //     }
    // },[user,loading])

    return (
        <DailyStorePage>
        <div className="register">
            <div className="register__container">
                <input
                    type="text"
                    className="register__textBox"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type="text"
                    className="register__textBox"
                    placeholder="E-mail Address"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="register__textBox"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="register__btn" 
                    onClick={()=>completeRegistration()}
                >
                    Register
                </button>
                <div>
                    Already have an account? <Link to="/login">Login</Link> now.
                </div>
               {
                  (!isValid) ? <p className="valMsg">{validationMessage} </p>:null
               } 
            </div>
        </div>
    </DailyStorePage>
    )
}


