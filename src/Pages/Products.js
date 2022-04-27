import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"

export const Products = () => {

    const products= useSelector(state=>state.products.availableProducts)


    return (
        <DailyStorePage>
            <h1>Products</h1>
            {
                products.map((item)=>{
                    return <h1>{item.title}</h1>
                })
            }
            <Link to='/register' >Register</Link>
        </DailyStorePage>
    )
}