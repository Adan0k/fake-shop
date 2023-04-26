import { PRODUCTS_FAILURE, PRODUCTS_SUCCESS, PRODUCTS_LOADING, CATEGORIES_FAILURE, CATEGORIES_SUCCESS, CATEGORIES_LOADING, ADD_TO_CART } from "./types";

export const getProducts = (dispatch) => {
    dispatch({
        type: PRODUCTS_LOADING
    })

    fetch("https://fakestoreapi.com/products")
        .then(r => r.json())
        .then(data => dispatch({
            type: PRODUCTS_SUCCESS,
            value: data
        }))
        .catch(e => {
            dispatch({
                type: PRODUCTS_FAILURE,
                value: e
            });

        })
}

export const getCategories = (dispatch) => {
    dispatch({
        type: CATEGORIES_LOADING
    })

    fetch("https://fakestoreapi.com/products/categories")
        .then(r => r.json())
        .then(data => dispatch({
            type: CATEGORIES_SUCCESS,
            value: data
        }))
        .catch(e => dispatch({
            type: CATEGORIES_FAILURE,
            value: e
        }));
}