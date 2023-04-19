import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export function AllProducts({children}){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState();
    const [category, setCategory] = useState(null);
    const [search, setSearch] = useState();
    
    useEffect(()=>{
        async function getProducts(){
            await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch(e => console.log(e));
        }

        getProducts();
    }, []);
    
    useEffect(() => {
        async function getCategories(){
            await fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
            .catch(e => console.log(e));
        }

        getCategories();
    }, []);

    console.log(categories);
    return (
        <ProductsContext.Provider value={{products, category, categories, setCategory, search, setSearch}}>
            {children}
        </ProductsContext.Provider>
    )
}