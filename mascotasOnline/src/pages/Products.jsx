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
            <div>
                {
                    products?.map(item => (
                        <Card  key={item.id} data={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;