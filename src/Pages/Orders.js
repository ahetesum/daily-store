import { Link } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"

export const Orders = () => {
    return (
        <DailyStorePage>
            <h1>Orders</h1>
            <Link to='/register' >Register</Link>
        </DailyStorePage>
    )
}