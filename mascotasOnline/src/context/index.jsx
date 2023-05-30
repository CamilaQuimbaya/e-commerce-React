/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const shoppingCartContext = createContext();


export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    console.log("count:" + count )
    return(
        <shoppingCartContext.Provider value={
            {
                count,
                setCount
            }
        }>
            {children}
        </shoppingCartContext.Provider>
    )
}