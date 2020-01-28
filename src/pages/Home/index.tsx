import React, { useState, useEffect } from 'react';

import { MdShoppingCart } from 'react-icons/md';

import {
  ProductList, Product, ProductImage, ProductDescription, ProductPrice, Button, ButtonDescription, ButtonImage,
} from './styles';

import { IProduct } from '../../store/ducks/products/models';
import formatPrice from '../../util/format';

import api from '../../services/api';

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function requestProducts(): Promise<number> {
    const response = await api.get('products');
    const data = response.data.map( (product: IProduct) => ({
        ...product,
        price: formatPrice(product.price)
    }))
    setProducts(data);
    return 1;
  }

  useEffect(() => {
    requestProducts();
  }, []);

  return (
    <ProductList>
      {products.map((p) => (
        <Product key={p.id}>
          <ProductImage alt={p.title} src={p.image} />
          <ProductDescription>{p.title}</ProductDescription>
          <ProductPrice>{p.price}</ProductPrice>
          <Button type="button">
            <ButtonImage>
              <MdShoppingCart size={16} color="#FFF" />
              {' '}
            3
            </ButtonImage>
            <ButtonDescription>ADICIONAR AO CARRINHO</ButtonDescription>
          </Button>
        </Product>

      ))}
    </ProductList>
  );
};

export default Home;
