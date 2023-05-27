/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

function Products () {
    const [products, setProducts ] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='titleComponent'>Products</h1>
            <div className='row container'>
                {
                    products?.map(item => (
                        <div key={item.id} className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center'>
                            <Card data={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;