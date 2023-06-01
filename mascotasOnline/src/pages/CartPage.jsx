/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import OrderCard from '../components/OrderCard';
import { shoppingCartContext } from '../context';


function CartPage () {
    const context = useContext(shoppingCartContext)

    const deleteProduct = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <div className='titleComponent'>
            <h1>Carrito</h1>
            <div className='d-flex row'>
                {
                    context.cartProducts.map(product =>  (
                        <div key={product.id} className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center'>
                            <OrderCard
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            deleteProduct={deleteProduct}
                        
                        />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default CartPage;