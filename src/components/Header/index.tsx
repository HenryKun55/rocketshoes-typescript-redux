import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import {
  Container,
  Logo,
  Cart,
  ContainerCart,
  NameCart,
  ItensCart,
} from './styles';

import logo from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <Link to="/">
      <Logo src={logo} alt="RocketShoes" />
    </Link>
    <Cart to="/cart">
      <ContainerCart>
        <NameCart>Meu Carrinho</NameCart>
        <ItensCart>10 itens</ItensCart>
      </ContainerCart>
      <MdShoppingBasket size={36} color="#FFF" />
    </Cart>
  </Container>
);

export default Header;
