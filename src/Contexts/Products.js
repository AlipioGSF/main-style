import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export function AllProducts({children}){
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        console.log("teste");
        async function getProducts(){
            await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch(e => console.log(e));
        }
        getProducts();
    }, []);


    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}