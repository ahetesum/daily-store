import { Link } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"


export const Contact = () => {
    return (
        <DailyStorePage>
            <h1>Contact</h1>
            <Link to='/register' >Register</Link>
        </DailyStorePage>
    )
}