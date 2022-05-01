export const CREATE_PRODUCT='CREATE_PRODUCT';



export const createProduct=(title,description,price,imgUrl)=>{
    return async ( dispatch,getState) =>{

        const response= await fetch(
            '----://daily-store-8f1fb-default-rtdb.asia-southeast1.firebasedatabase.app/user.json',
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
        let isRegister=false;
        if(resData && resData.name)
        {
            let product = {id:resData.name,title,description,price,imgUrl};
            dispatch({type:CREATE_PRODUCT,product})

        }

    }
}