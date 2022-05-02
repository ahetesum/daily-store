export const CREATE_PRODUCT='CREATE_PRODUCT';
export const GET_PRODUCTS='GET_PRODUCTS';



export const getProduct=()=>{
    return async ( dispatch,getState) =>{

            let response= await fetch('https://daily-store-8f1fb-default-rtdb.asia-southeast1.firebasedatabase.app/products.json');
    
            const resData= await response.json();

            const resProducts = Object.entries(resData).map(([id, item]) => ({ id, title:item.title ,description:item.description,price:item.price,imgUrl:item.imgUrl}));
        if(resData && resProducts)
        {
            dispatch({type:GET_PRODUCTS,resProducts})

        }

    }
}