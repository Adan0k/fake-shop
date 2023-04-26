import { PRODUCTS_FAILURE, PRODUCTS_SUCCESS, CATEGORIES_FAILURE, CATEGORIES_SUCCESS, SELECTED_PRODUCT, SELECTED_CATEGORY, SEARCH, ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, CHANGE_CART_VISIBILITY } from "./types";

export const initialState = {
    products: [],
    categories: [],
    cart: [],
    cartVisibility: false,
    page: 0,
    selectedCategory: null,
    selectedProduct: null,
    searchFilter: null,
    errorMessage: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_SUCCESS:
            return { ...state, products: action.value };
        case PRODUCTS_FAILURE:
            return { ...state, errorMessage: action.value };
        case CATEGORIES_SUCCESS:
            return { ...state, categories: action.value };
        case CATEGORIES_FAILURE:
            return { ...state, categories: action.value };
        case SELECTED_PRODUCT:
            return { ...state, selectedProduct: action.value };
        case SELECTED_CATEGORY:
            return { ...state, selectedCategory: action.value };
        case SEARCH:
            return { ...state, searchFilter: action.value };
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.value] };
        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter((e) => e.id !== action.value) };
        case EMPTY_CART:
            return { ...state, cart: [] };
        case CHANGE_CART_VISIBILITY:
            return { ...state, cartVisibility: !state.cartVisibility }
        default:
            return state;
    }
}