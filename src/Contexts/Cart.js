import { createContext, useState, useContext, useEffect } from "react";
import { ProductsContext } from "./Products";


export const CartContext = createContext();

export function Cart({ children }) {

    const { products } = useContext(ProductsContext);

    const [inCart, setInCart] = useState([]);
    const [view, setView] = useState(false);
    const [total, setTotal] = useState(0);
    const [confirmProd, setConfirmProd] = useState([]);

    function addToCart(item) {
        let valible = true;
        if (inCart) {
            inCart.map((pc) => (
                pc.id === item ? valible = false : null
            ))
        }
        if (valible) {
            products.map((p) => (
                p.id === item ? setInCart((prev) => [...prev, p]) : null)
            )
        }
    }

    function remove(item) {
        setInCart(prev => prev.filter((value, i) => value.id !== item))
    }

    async function updateConfirmProd(nP) {
        await setConfirmProd(prev => prev.filter((value, i) => value.prod.id !== nP.prod.id));
        await setConfirmProd(prev => [...prev, nP]);      
        await calculateTotal();
    }
    
    async function calculateTotal() {
        await setTotal(confirmProd.reduce((t,  v) => {return t+v.balance}, 0))
    }
    

    return (
        <CartContext.Provider value={{ inCart, addToCart, remove, view, setView, total, confirmProd,updateConfirmProd, setConfirmProd }}>
            {children}
        </CartContext.Provider>)
}