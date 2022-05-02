import { useState } from "react";
import { useDispatch } from "react-redux";
import { DailyStorePage } from "../Components/UI/DailyStorePage";
import { addProduct } from "../Store/Actions/productAction";




export const AddProduct = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const productDispach=useDispatch();

    const createProduct=()=>{
        //validate
        productDispach(addProduct(title,description,price,imgUrl));
    }


    return (
        <DailyStorePage>
            <div className="register__container">
                <input
                    type="text"
                    className="register__textBox"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="register__textBox"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    className="register__textBox"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    className="register__textBox"
                    placeholder="Image URL"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                />
                        <button className="register__btn" 
                    onClick={()=>createProduct()}
                >
                    Add
                </button>
            </div>
        </DailyStorePage>
    );
}