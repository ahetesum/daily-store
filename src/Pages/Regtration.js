import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"
import { cypher } from "../Helpers/CryptoHelper";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Store/Actions/userAction";


export const Regstration = () => {

    const [loading,setLoading]= useState('');
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [isValid,setIsValid]= useState(true);
    const [validationMessage,setValidationMessage]= useState('');

    const userInfo= useSelector(state=>state.user);

    const completeRegistration=()=>{
       
       if(isFormValid())
       registerNewUser();
    }

    let regDispach= useDispatch();

    const registerNewUser=()=>{
        setLoading(true)
        let encryptedPswd= cypher(password);
        console.log(encryptedPswd);
        regDispach(registerUser(name,email,encryptedPswd));
        
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

    useEffect(()=>{

        if(userInfo && userInfo.isRegister)
        {
            setLoading(false)
            nav('/login');
        }
    },[userInfo])

    return (
        <DailyStorePage>
        {(loading)?<h1>Loading....</h1>:<div className="register">
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
        </div>}
    </DailyStorePage>
    )
}


