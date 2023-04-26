import { createContext, useState, useContext } from "react";
import { ProductsContext } from "./Products";


export const CartContext = createContext();

export function Cart({children}){

    const {products} = useContext(ProductsContext);

    const [prod, setProd] = useState([]);
    const [view, setView] = useState(false);

    function addToCart(item){
        let valible = true;
        let currentProd;
        products.map((p) => (
            p.id === item?
            prod.map((pc) => (
                pc.id === item?valible = false:null
                ))
            :null
            ))
        }

    function removeFromCart(item){
        prod.map((value, index) => (
            item === value.title?
                prod.pop(index-1)
            :null
        ))
    }

    return(
    <CartContext.Provider value={{prod, addToCart, removeFromCart, view, setView}}>
        {children}
    </CartContext.Provider>)
}