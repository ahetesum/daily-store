import { Link } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"



export const About = () => {
    return (
        <DailyStorePage>
            <h1>About</h1>
            <Link to='/register' >Register</Link>
            </DailyStorePage>    )
}