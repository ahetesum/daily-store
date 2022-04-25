import { Link } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"

export const Products = () => {
    return (
        <DailyStorePage>
            <h1>Products</h1>
            <Link to='/register' >Register</Link>
        </DailyStorePage>
    )
}