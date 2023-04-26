import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./style";


const Product = ({ id, image, title, price }) => {
    return (
        <Link to={`/product/${id}`}>
            <ProductCard>
                <img src={image} alt="product_img" />
                <h3>{title}</h3>
                <span>{`R$ ${price}`}</span>
            </ProductCard>
        </Link>
    );
}

export default Product;