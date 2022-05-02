import { GET_PRODUCTS } from "../Actions/productAction";


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
    }

    return state;

}


export default productReducer;