import { createContext } from "react";

export const CartContext = createContext();

export function Cart({children}){

    const [items, setItems] = ([]);

    function addToCart(item){
        setItems(item);
    }

    function removeFromCart(item){
        items.map((value, index) => (
            item === value.title?
                items.pop(index-1)
            :null
        ))
    }

    return(
    <CartContext.Provider value={{items, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>)
}