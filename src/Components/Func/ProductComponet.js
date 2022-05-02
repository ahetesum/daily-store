import { useDispatch } from "react-redux";
import { deleteWithId } from "../../Store/Actions/productAction";

export const ProductComponet=(props)=>{
    const {id, title,description,imgUrl,price} = props.product;
    const {isAdmin} = props;

    let prodDispatch=useDispatch();
    const deleteProduct=(id)=>{
        prodDispatch(deleteWithId(id));
    }


    return (
        <div className='productContainer'>
            <img src={imgUrl} height={180} width={120} />
            <h5>{title}</h5>
            <h5>{description}</h5>
            <h5>{price}</h5>
            {(isAdmin)?
            <input type='button' value="Delete" onClick={()=>deleteProduct(id)} />:
            <input type='button' value="Add To Cart" />}

        </div>
    );
}