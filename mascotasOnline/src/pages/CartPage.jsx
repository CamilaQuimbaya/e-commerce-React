/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import OrderCard from '../components/OrderCard';
import { shoppingCartContext } from '../context';
import { totalPrice, totalconIva } from '../utils';

function CartPage () {
    const context = useContext(shoppingCartContext)

    const deleteProduct = (id) => {
        context.setCount(context.count - 1)
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <div className='titleComponent'>
            <h1>Carrito</h1>
            <div className="card2 checkout">
                <label className="title2">Checkout</label>
                <div className="details">
                    <span>Your total:</span>
                    <span>${totalPrice(context.cartProducts)}</span>
                </div>
                <div className="checkout--footer">
                <span>Your total IVA:</span>
                    <label className="price"><sup>$</sup>${totalconIva(context.cartProducts)}</label>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
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