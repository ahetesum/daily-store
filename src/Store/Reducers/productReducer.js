import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS } from "../Actions/productAction";


const initialState={
    availableProducts:[],

};

 const productReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case GET_PRODUCTS:
            return{ 
                ...state, 
                availableProducts: action.resProducts,
            }
            case CREATE_PRODUCT:
                let tempProducts=state.availableProducts;
                tempProducts.push(action.resProducts)
                console.log(tempProducts)
                return{ 
                    ...state, 
                    availableProducts:tempProducts,
                }
                case DELETE_PRODUCT:
                let notDeletedProducts =state.availableProducts.filter(x=>x.id!==action.deleteId);
                 return{ 
                        ...state, 
                        availableProducts:notDeletedProducts,
                    }
    }

    return state;

}


export default productReducer;