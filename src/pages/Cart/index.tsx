import React from 'react';

import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md';
import {
  Container, ProductTable, ProductTHead, ProductTLine, ProductTTitle, ProductBody, ProductTR, ProductTD, ProductImage, ProductDescription, ProductPrice, ProductButtons, ProductButton, ProductCount, ProductTotal, Footer, FooterButton, Total, TotalName, TotalPrice,
} from './styles';

const Cart: React.FC = () => (
  <Container>
    <ProductTable>
      <ProductTHead>
        <ProductTLine>
          <ProductTTitle />
          <ProductTTitle>PRODUTO</ProductTTitle>
          <ProductTTitle>QTD</ProductTTitle>
          <ProductTTitle>SUBTOTAL</ProductTTitle>
          <ProductTTitle />
        </ProductTLine>
      </ProductTHead>
      <ProductBody>
        <ProductTR>
          <ProductTD>
            <ProductImage src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt="Tênis muito foda" />
          </ProductTD>
          <ProductTD>
            <ProductDescription>Tênis muito massa</ProductDescription>
            <ProductPrice>R$129,90</ProductPrice>
          </ProductTD>
          <ProductTD>
            <ProductButtons>
              <ProductButton type="button">
                <MdRemoveCircleOutline size={20} color="#000" />
              </ProductButton>
              <ProductCount type="number" readOnly value={2} />
              <ProductButton type="button">
                <MdAddCircleOutline size={20} color="#000" />
              </ProductButton>
            </ProductButtons>
          </ProductTD>
          <ProductTD>
            <ProductTotal>R$258,80</ProductTotal>
          </ProductTD>
          <ProductTD>
            <ProductButton type="button">
              <MdDelete size={20} color="#777" />
            </ProductButton>
          </ProductTD>
        </ProductTR>
      </ProductBody>
    </ProductTable>
    <Footer>
      <FooterButton type="button">Finalizar Pedido</FooterButton>
      <Total>
        <TotalName>TOTAL</TotalName>
        <TotalPrice>R$489,90</TotalPrice>
      </Total>
    </Footer>
  </Container>
);

export default Cart;
