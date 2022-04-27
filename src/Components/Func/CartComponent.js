
export const CartComponent=()=>{

    return (

        <div className='userContainer'>
            <div className='cartCount' >{0}</div>
            <img src={require('../../Assets/cart.png')} height={35} width={35} />
        </div>
    );
}