import StepsHeader from './StepsHeader';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import './styles.css';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';
import React from 'react';

 
function Orders () {
   const [products, setPrducts] = useState<Product[]>([]);
   console.log(products);
    useEffect(() => {
        fetchProducts()
            .then(response => setPrducts(response.data))
            .catch(error => console.log(error))
    }, []);
    return (
       
        <div className="order-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location =>  (location)} />
        </div>
    );
}
export default Orders;