/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const shoppingCartContext = createContext();


export const ShoppingCartProvider = ({children}) => {
    //shopiing cart context
    const [count, setCount] = useState(0);

    //product details open/close
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

    const openProductDetails = () => setIsProductDetailsOpen(true);
    const closeProductDetails = () => setIsProductDetailsOpen(false);

    //product to show
    const [productToShow, setProductToShow] = useState({});

    //shopping cart context Add to cart

    const [cartProducts, setCartProducts] = useState([])

    return(
        <shoppingCartContext.Provider value={
            {
                count,
                setCount,
                isProductDetailsOpen,
                openProductDetails,
                closeProductDetails,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts
            }
        }>
            {children}
        </shoppingCartContext.Provider>
    )
}