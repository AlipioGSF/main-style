import {useContext, useState, useEffect} from 'react'
import { ProductsContext } from '../../Contexts/Products'
import "./catalogo.css";

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
                <div className='w3-card produto'>
                    <div className="imgProduto" style={{backgroundImage: `url(${p.image})`}}></div>
                    <div class="descricao">
                        <h5>{p.title}</h5>
                        <div class="priceCart">
                            <h6>R${p.price}</h6>
                            <button className='w3-button w3-hover-blue w3-tiny w3-green'>add to Cart</button>
                        </div>
                    </div>
                </div>
                :null
            )):null 
        }

        {
            products.map((p) => (
            category === null?
                <div className='w3-card produto'>
                    <div className="imgProduto" style={{backgroundImage: `url(${p.image})`}}></div>
                    <div class="descricao">
                        <h5>{p.title}</h5>
                        <div class="priceCart">
                            <h6>R${p.price}</h6>
                            <button className='w3-button w3-hover-blue w3-tiny w3-green'>add to Cart</button>
                        </div>
                    </div>
                </div>
            :category === p.category?
                <div className='w3-card produto'>
                    <div className="imgProduto" style={{backgroundImage: `url(${p.image})`}}></div>
                    <div class="descricao">
                        <h5>{p.title}</h5>
                        <div class="priceCart">
                            <h6>R${p.price}</h6>
                            <button className='w3-button w3-hover-blue w3-tiny w3-green'>add to Cart</button>
                        </div>
                    </div>
                </div>
            :null
        ))}

    </section> 
  
  }
  </>)
}

export default Catalogo