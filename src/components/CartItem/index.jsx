import React from "react";
import { useDispatch } from "react-redux";
import { Item } from "./style";
import { FiXCircle } from "react-icons/fi";
import { REMOVE_FROM_CART } from "../../redux/types";

const CartItem = ({ title, price, image, id }) => {
    const dispatch = useDispatch();

    return (
        <Item>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <span>${price}</span>
            </div>
            <button onClick={() => dispatch({ type: REMOVE_FROM_CART, value: id })}><FiXCircle /></button>
        </Item>
    );
}

export default CartItem;