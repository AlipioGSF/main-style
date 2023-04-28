import { useContext, useEffect } from 'react';
import { CartContext } from '../../Contexts/Cart';
import ProdInCart from '../../Components/prodInCart';
import './sidebar.css';

const Sidebar = () => {
    const { view, setView, inCart, total} = useContext(CartContext);

    return (
        <>
            {
                view?
                <div class="w3-sidebar w3-bar-block w3-card w3-display-right" id="carrinho">
                    <button onClick={() => {setView(false)}} class="w3-bar-item w3-button w3-large">Close &times;</button>
                    {
                        inCart && inCart.map((p) => 
                            <ProdInCart id={p.id}/>
                        )
                    }
                    <h4>Total:</h4>
                    {
                        total?<h5>{total.toFixed(2)}</h5>:0
                    }

                </div>
                :null

            }
        </>

    )
}

export default Sidebar