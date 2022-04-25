import { Link } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"



export const Dashboard = () => {
    return (
        <DailyStorePage>
            <div>
                <h1>Dashboard</h1>
                <Link to='/register' >Register</Link>
            </div>
        </DailyStorePage>

    )
}