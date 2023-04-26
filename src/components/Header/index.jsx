import React, { useRef } from "react";
import { StyledHeader, Input } from "./style";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SELECTED_CATEGORY, SEARCH, CHANGE_CART_VISIBILITY } from "../../redux/types";
import logo from "../../assets/fakeshop.png";


const Header = () => {
    const { categories, selectedCategory } = useSelector((state) => state);
    const searchInput = useRef();
    const dispatch = useDispatch();

    const setSelectedCategory = (category) => {
        if (selectedCategory === category) {
            dispatch({
                type: SELECTED_CATEGORY,
                value: null
            });
            return
        }

        dispatch({
            type: SELECTED_CATEGORY,
            value: category
        })
    }
    const setSearchFilter = (searchFilter) => {
        if (searchFilter === "") {
            dispatch({
                type: SEARCH,
                value: null
            });
            return
        }
        dispatch({
            type: SEARCH,
            value: searchFilter
        });
    }

    return (
        <StyledHeader>
            <div className="header-top">
                <img className="logo"
                    src={logo}
                    alt="logo" />
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setSearchFilter(searchInput.current.value)
                }}>
                    <Input placeholder="search" type="search" ref={searchInput} />
                </form>
                <button onClick={() => dispatch({ type: CHANGE_CART_VISIBILITY })}><BiCart /></button>
            </div>

            <div className="categories">
                <ul>
                    {categories.map((category) => <li key={category} onClick={() => setSelectedCategory(category)}>{category}</li>)}
                </ul>
            </div>
        </StyledHeader>
    )
}

export default Header;