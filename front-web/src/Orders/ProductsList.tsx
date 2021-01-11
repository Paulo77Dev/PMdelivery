import { Product } from './types'
import ProductsCard from "./ProductCard";

type Props = {
    products: Product[]; 
}

function ProductsList ({ products }: Props) {
    return (
        <div className="products-list-container">
            <div className="products-list-content">
                <div className="products-list-items">
                    {products.map(product => ( 
                        <ProductsCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>    
    );
}
export default ProductsList;