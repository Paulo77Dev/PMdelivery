import { Product } from './types';

type Props = {
    product: Product;
}

function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        
    });
    return formatter.format(price);
}

function ProductsCard ({ product }: Props) {
    return (
        <div className="product-card-container">
            <h3 className="product-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri} 
                className="product-card-img" alt={product.name}/>
           <h3 className="product-card-price">
               {formatPrice(product.price)}
           </h3>
           <div className="product-card-description">
                <h3>
                    DESCRIÇÃO
                </h3>
                <p>
                    {product.description}
                </p>
           </div>
        </div>
    );
}
export default ProductsCard;