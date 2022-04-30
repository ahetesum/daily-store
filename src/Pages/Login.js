import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"
import { loginUser } from "../Store/Actions/userAction";



export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginDispatch=useDispatch();
    
    const completeLogin=()=>{
            loginDispatch(loginUser(email,password));
    }

    const user= useSelector(state=>state.user)



    useEffect(() => {
        if (user && user.currentUser) 
        {
            navigate("/");
        }
    }, [user]);


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