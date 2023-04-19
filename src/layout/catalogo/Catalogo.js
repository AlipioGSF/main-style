import {useContext, useEffect} from 'react'
import { ProductsContext } from '../../Contexts/Products'
import "./catalogo.css";


const Catalogo = () => {

    const products = useContext(ProductsContext);

  return (
  <>
  { 
    products &&
    <section className='catalogo'>
        {products.products.map((p) => (
            <div className='produto'>
                <img src={p.image}/>
                <div class="descricao">
                    <h2>{p.title}</h2>
                    <h3>R${p.price}</h3>
                </div>
            </div>
        ))}
    </section> 
  
  }
  </>
  )
}

export default Catalogo