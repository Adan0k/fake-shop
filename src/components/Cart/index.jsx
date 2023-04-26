import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_CART_VISIBILITY } from "../../redux/types";
import CartItem from "../CartItem";
import { Block, Drawer } from "./style";

const Cart = () => {
    const { cart, cartVisibility } = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <>
            <Block onClick={() => dispatch({ type: CHANGE_CART_VISIBILITY })} visibility={cartVisibility} />
            <Drawer visibility={cartVisibility}>
                {cart.map((e) => <CartItem title={e.title} image={e.image} id={e.id} price={e.price} key={e.id} />)}
            </Drawer>
        </>
    );
}

export default Cart;