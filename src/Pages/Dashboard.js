import { Link } from "react-router-dom"
import { DailyStoreSlider } from "../Components/Func/DailyStoreSlider"
import { DailyStorePage } from "../Components/UI/DailyStorePage"



export const Dashboard = () => {
    return (
        <DailyStorePage>
            <div>
               <DailyStoreSlider/>
                <Link to='/register' >Register</Link>
            </div>
        </DailyStorePage>

    )
}