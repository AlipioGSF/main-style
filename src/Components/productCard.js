import { useContext } from 'react'
import { CartContext } from '../Contexts/Cart';


export default function ProductCard(props){
    const { addToCart } = useContext(CartContext);

    return (
        <>
           <div className='produto'>
            <div className="imgProduto" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className='descricao'>
                <h5>{props.title}</h5>
                <div className='priceCart'>
                    <h6>{props.price}</h6>
                    <button  className="w3-button" onClick={() => addToCart(props.id)}>Add to Cart</button>
                </div>
            </div>
        </div>
        </>
  ) 
}