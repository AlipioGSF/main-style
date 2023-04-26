import {useContext} from 'react'
import { CartContext } from '../Contexts/Cart'
import './css/cartButton.css';

const CartButton = () => {
    const {setView} = useContext(CartContext);


  return (
    <button id="cartBtn" onClick={() => setView(true)}></button>
  )
}

export default CartButton