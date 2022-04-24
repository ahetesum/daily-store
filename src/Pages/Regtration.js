import { Link } from "react-router-dom"


export const Regstration = () => {
    return (
        <>
            <h1>Register</h1>
            <Link to='/' >Login</Link>
        </>


    )
}







// <div className="register">
// <div className="register__container">
//     <input
//         type="text"
//         className="register__textBox"
//         placeholder="Full Name"
//     />
//     <input
//         type="text"
//         className="register__textBox"
//         placeholder="E-mail Address"
//     />
//     <input
//         type="password"
//         className="register__textBox"
//         placeholder="Password"
//     />
//     <button className="register__btn" onClick={() => { }}>
//         Register
//     </button>
//     <div>
//         Already have an account? <Link to="/">Login</Link> now.
//     </div>
// </div>
// </div>