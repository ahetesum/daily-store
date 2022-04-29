import { async } from "@firebase/util";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ProductComponet } from "../Components/Func/ProductComponet";
import { DailyStorePage } from "../Components/UI/DailyStorePage"

export const Products = () => {


    const [products,setProducts]= useState([]);


    useEffect(()=>{
         fetchProducts();

    },[]);

    const fetchProducts = async()=>{
        let response= await fetch('https://daily-store-8f1fb-default-rtdb.asia-southeast1.firebasedatabase.app/products.json');

        const resData= await response.json();

        const resProducts = Object.entries(resData).map(([id, item]) => ({ id, title:item.title ,description:item.description,price:item.price,imgUrl:item.imgUrl}));
        console.log(resProducts);
        setProducts(resProducts);
    }

    return (
        <DailyStorePage>
            <h1>Products</h1>
            <div className="produtList">
            {
                products.map((item)=>{
                    return <ProductComponet product={item}/>
                })
            }
            </div>
        </DailyStorePage>
    )
}