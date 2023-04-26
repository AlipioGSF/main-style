import { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart'
import ProdInCart from '../../Components/prodInCart';
import './sidebar.css';

const Sidebar = () => {
    const { view, setView, prod } = useContext(CartContext);

    return (
        <>
            {
                view?
                <div class="w3-sidebar w3-bar-block w3-card w3-animate-right w3-display-right" id="carrinho">
                    <button onClick={() => {setView(false)}} class="w3-bar-item w3-button w3-large">Close &times;</button>
                    {prod && prod.map((p) => (
                    <ProdInCart />))}
                </div>
                :null
            }
        </>

    )
}

export default Sidebar