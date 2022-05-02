import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductComponet } from "../Components/Func/ProductComponet";
import { DailyStorePage } from "../Components/UI/DailyStorePage"
import { getProduct } from "../Store/Actions/productAction";


export const ProductMngr=()=>{

    const productsDispach=useDispatch();
    const products= useSelector(state=>state.products);

    useEffect(()=>{
        console.log(products.availableProducts)
        productsDispach(getProduct());
    },[]);

    return(
        <DailyStorePage>
            <h1>Products</h1>
            <div className="produtList">
            {
               products && products.availableProducts.map((item)=>{
                    return <ProductComponet key={item.id} product={item} isAdmin={true} />
                })
            }
            </div>
        </DailyStorePage>
    )
}