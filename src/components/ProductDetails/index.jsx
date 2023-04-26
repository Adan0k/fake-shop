import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductContainer } from "./style";
import { ADD_TO_CART } from "../../redux/types";


const ProductDetails = () => {
    const { id } = useParams();
    const { products, cart } = useSelector(state => state);
    const product = products.find((e) => e.id === +id);
    const dispatch = useDispatch();
    return (
        <ProductContainer>
            <div className="grid">
                <div className="image-layer">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div className="price">
                        <span>${product.price}</span>
                        <button onClick={() => addItemToCart(dispatch, cart, product)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </ProductContainer>
    );
}
const addItemToCart = (dispatch, cart, item) => {
    if (cart.includes(item)) {
        return
    }
    dispatch({
        type: ADD_TO_CART,
        value: item
    })
}

export default ProductDetails;