import React from "react";
import Product from "../Product";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Center } from "./style";
import { getProducts } from "../../redux/action";


const ProductGrid = () => {
    const { products, searchFilter, selectedCategory } = useSelector(state => state)
    const filterProducts = () => {
        let temp = [...products];

        if (selectedCategory !== null) {
            temp = temp.filter(product => product.category === selectedCategory);
        }
        if (searchFilter !== null) {
            temp = temp.filter(product => product.title.toUpperCase().includes(searchFilter.toUpperCase()));
        }
        return temp
    }
    return (
        <Center>
            <Grid>
                {filterProducts().map((product) => <Product key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} />)}
            </Grid>
        </Center>
    );
}



export default ProductGrid;