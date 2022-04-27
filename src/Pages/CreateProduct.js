import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { DailyStorePage } from "../Components/UI/DailyStorePage"
import { createProduct } from "../Stote/Actions/productAction";

export const CreateProduct = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imgUrl, setImgUrl] = useState("");

    const dispatch = useDispatch();

    const onCreate=()=>{
        dispatch(
            createProduct(
                title,
                description,
                imgUrl,
                price,
            )
          );
    }

    return (
        <DailyStorePage>
  <div className="register">
                <div className="register__container">
                    <input
                        type="text"
                        className="register__textBox"
                        placeholder="Title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        className="register__textBox"
                        placeholder="E-mail Address"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                    <input
                        type="number"
                        className="register__textBox"
                        placeholder="Price"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                     <input
                        type="text"
                        className="register__textBox"
                        placeholder="Image"
                        value={imgUrl}
                        onChange={(e)=>setImgUrl(e.target.value)}
                    />
                    <button className="register__btn" onClick={()=>onCreate()}>
                        Add
                    </button>
         
          
                </div>
            </div>    
        </DailyStorePage>
    )
}