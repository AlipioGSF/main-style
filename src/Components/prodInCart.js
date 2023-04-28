import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../Contexts/Cart'
import { ProductsContext } from '../Contexts/Products';
import './css/prodInCart.css';

const ProdInCart = (props) => {
    const {products} = useContext(ProductsContext);
    const {remove, inCart, updateConfirmProd, setConfirmProd} = useContext(CartContext);
    const [prod, setProd] = useState();
    const [quantity, setQuantity] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        products.map((p) => (
            p.id == props.id? setProd(p):null
        ))
    }, [inCart]);

    useEffect(() => {
        async function makeBalance(){
            if(prod){
                await setBalance(prod.price * quantity);
            }
            if(quantity >=1){
                await updateConfirmProd({prod: prod, balance: balance});
            }
            if(prod && quantity==0){
                await setConfirmProd(prev => prev.filter((value, i) => value.prod.id !== prod.id));
            }
        }
        makeBalance();
    }, [quantity])

    return (
    <>
        {
            prod &&
                    <div className='prodInCart w3-card'>
                        <div className='imgInCart' style={{backgroundImage:`url(${prod.image})`}}></div>
                        <div className='descInCard'>
                            <h5>{prod.title}</h5>
                            <h5>{prod.price}</h5>
                            <div className='btnInCart'>
                                <button onClick={async () => await setQuantity((qtt) => quantity <= 0?0:qtt - 1)}>-</button>
                                {quantity>=0?quantity:null}
                                <button onClick={async () => await setQuantity((qtt) => qtt + 1)}>+</button>
                                <button className='delInCart' onClick={() => remove(prod.id)}>remove</button>
                            </div>
                        </div>
                    </div>
        }
        {
            balance && <h1>{balance.toFixed(2)}</h1>
        }
    </>
    )
}

export default ProdInCart