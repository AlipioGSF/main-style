import { useContext } from 'react'
import { CartContext } from '../Contexts/Cart'


const ProdInCart = () => {
    const { prod } = useContext(CartContext);

    return (<>
        {
            prod &&
            prod.map((p) => (
                <div className='prodInCart'>
                    <div className='imgInCart'></div>
                    <div className="descCart">
                        <h3 className='titleCart'>{p.produto.title}</h3>
                        <div className='qttPrice'>
                            <h4>{p.produto.price}</h4>
                            <div clossName="qttLocal">
                                <div>
                                    <button onClick={(p) => {p.quantity--}}>&minus;</button>
                                    {p.quantity}
                                    <button onClick={(p) => {p.quantity++}}>&#9547;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
    )
}

export default ProdInCart