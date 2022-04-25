import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"
import { useAuthState } from "react-firebase-hooks/auth";
import {
    auth,
    registerWithEmailAndPassword,
  } from "./../Helpers/FirebaseHelper";

export const Regstration = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [isValid,setIsValid] = useState(true);
    const [validationMessage,setValidationMessage] = useState('Helloooo');

    const completeRegistration=()=>{
            if(isFeildsValid())
            {
                registerWithEmailAndPassword(name, email, password);
                console.log("API")
            }
    }

    const isFeildsValid=()=>{

        if(name.length<3 && name.length<40)
        {
            setIsValid(false);
            setValidationMessage('Name length is Not valid');
            return false;   
        }
        else if(!email.includes('@') || !email.includes('.'))
        {
            setIsValid(false);
            setValidationMessage('Email is Not valid');
            return false;

        }
        else if(password.length<8)
        {
            setIsValid(false);
            setValidationMessage('Password length Must be Greater than 8');
            return false;
        }
        else
        {
            setIsValid(true);
            setValidationMessage(''); 
            return true;

        }
    }

    let navigate = useNavigate();


    useEffect(() => {
        console.log(user)
        if (loading) return;
        if (user) 
        {
            navigate('/');
        }
      }, [user, loading]);

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
                    <button className="register__btn" onClick={()=>completeRegistration()}>
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





