export const CREATE_PRODUCT='CREATE_PRODUCT';
export const GET_PRODUCTS='GET_PRODUCTS';
export const DELETE_PRODUCT='DELETE_PRODUCT';


export const addProduct=(title,description,price,imgUrl)=>{
    return async (dispatch,getState)=>{
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
                    price,
                    imgUrl
                })
            }
        );

        const resData= await response.json();
        console.log(JSON.stringify(resData));

        if(resData && resData.name)
        {
            let product = {  
                id:resData.name,
                title,
                description,
                price,
                imgUrl}

                dispatch({type:CREATE_PRODUCT,product})

        }
    }
}


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


export const deleteWithId=(id)=>{
    return async ( dispatch,getState) =>{

            let response= await fetch(`https://daily-store-8f1fb-default-rtdb.asia-southeast1.firebasedatabase.app/products/${id}.json`,
            {
                method : "DELETE",
            }
            );
    
            const resData= await response.json();
           
            dispatch({type:DELETE_PRODUCT,deletedId:id})


    }
}