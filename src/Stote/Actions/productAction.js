import Product from "../../Models/Product";

export const CREATE_PRODUCT='CREATE_PRODUCT';
export const UPDATE_PRODUCT='UPDATE_PRODUCT';
export const DELETE_PRODUCT='DELETE_PRODUCT';
export const SET_PRODUCT='SET_PRODUCT';


export const setProducts=()=>{
    return async (dispatch,getState) =>{
        const response= await fetch('https://daily-store-8f1fb-default-rtdb.asia-southeast1.firebasedatabase.app/products.json',);

    }
}

export const createProduct=(title,description,imageUrl,price)=>{
    return async (dispatch,getState) =>{
        const response= await fetch(
            'https://daily-store-8f1fb-default-rtdb.asia-southeast1.firebasedatabase.app/products.json',
            {
                method : "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    imageUrl,
                    price,
                })
            }
        );

        const resData= await response.json();

        console.log(JSON.stringify(resData))

        dispatch({type:CREATE_PRODUCT,
            productData:
            {
                id:resData.name,
                title,
                description,
                imageUrl,
                price
            }
        })
    }
}

export const deleteProduct=(productId)=>{
    return async (dispatch,getState) =>{
    }
}