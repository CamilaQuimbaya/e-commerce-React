/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import closeButton from '../assets/icons/closeButton.svg';
import { shoppingCartContext } from '../context';


function ProductDetails () {
    const context = useContext(shoppingCartContext);
    return (
        <aside className={`product-detail d-${context.isProductDetailsOpen ? 'flex' : 'none'} justify-content-between align-items.center`}>
            <div>
                <h2></h2>
                <div onClick={() => context.closeProductDetails()}>
                    <img src={closeButton} alt="" />
                </div>
            </div>
            <div className='productDetailsContent'> 
                <img src={context.productToShow.image} alt="" className='imgDetails'/>
                <h4>{context.productToShow.title}</h4>
                <p>{context.productToShow.description}</p>
                <h3>${context.productToShow.price}</h3>
            </div>
        </aside>
    )
}

export default ProductDetails;