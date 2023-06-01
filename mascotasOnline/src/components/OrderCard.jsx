/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import deleteIcon from '../assets/icons/deleteButton.svg';

const OrderCard = props => {

    const {id, title, image, price, deleteProduct} = props

    console.log(title)
    return (
        <div>
            
            <div className="master-container">
                <div className="cartCard cart">
                                <label className="title">Your cart</label>
                                <div className="products">
                                <div className="product">
                                    <img src={image} alt="" className='orderCartItem' />
                            <div>
                            <span>{title}</span>
                            </div>
                            <div className="quantity">
                            <button>
                                <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M20 12L4 12"></path>
                                </svg>
                            </button>
                            <label>2</label>
                            <button>
                                <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
                                </svg>
                            </button>
                            </div>
                            <div className='infoCart'>
                                <img src={deleteIcon} alt=""  className='deleteButtonCart' onClick={() => deleteProduct(id)}/>
                            </div>
                            <label className="price small">${price}</label>
                        </div>
                        </div>
                    </div>

            </div>


        </div>
    );
}

export default OrderCard;