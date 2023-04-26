import {useContext} from 'react'
import { ProductsContext } from '../../Contexts/Products'
import ProductCard from '../../Components/productCard';
import './catalogo.css';

const Catalogo = () => {

    const {products, category, search} = useContext(ProductsContext);


  return (
  <>
  {
    products &&
    <section className='catalogo'>

        {
            search?
            products.map((p) => (
                p.title.toLowerCase().includes(search.toLowerCase())?
                <ProductCard image={p.image} title={p.title} price={p.price} id={p.id}/>
                :null
            )):null 
        }

        {
            products.map((p) => (
            category === null?
            <ProductCard image={p.image} title={p.title} price={p.price} id={p.id}/>
            :category === p.category?
            <ProductCard image={p.image} title={p.title} price={p.price} id={p.id}/>
            :null
        ))}

    </section> 
  
  }
  </>)
}

export default Catalogo