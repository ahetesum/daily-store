
export const ProductComponet=(props)=>{
    const {id, title,description,imgUrl,price} = props.product
    return (
        <div className='productContainer'>
            <img src={imgUrl} height={180} width={120} />
            <h5>{title}</h5>
            <h5>{description}</h5>
            <h5>{price}</h5>
            <input type='button' value="Add To Cart" />
        </div>
    );
}