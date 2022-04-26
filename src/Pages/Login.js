import { Link } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"



export const Login = () => {
    return (
        <DailyStorePage>
             <div className="register">
                <div className="login__container">
                    <input
                        type="text"
                        className="login__textBox"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <input
                        type="password"
                        className="login__textBox"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button
                        className="login__btn"
                        // onClick={() =>completeLogin()}
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
