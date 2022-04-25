import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"
import { auth, logInWithEmailAndPassword } from "../Helpers/FirebaseHelper";



export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, loading, error] = useAuthState(auth);


    const completeLogin=()=>{
        logInWithEmailAndPassword(email, password)    
    }


    const navigate = useNavigate();
    
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/");
    }, [user, loading]);


    return (
        <DailyStorePage>
            <div className="register">
                <div className="login__container">
                    <input
                        type="text"
                        className="login__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <input
                        type="password"
                        className="login__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button
                        className="login__btn"
                        onClick={() =>completeLogin()}
                    >
                        Login
                    </button>
                    <div>
                        Don't have an account? <Link to="/register">Register</Link> now.
                    </div>
                </div>
            </div>
        </DailyStorePage>
    )
}
