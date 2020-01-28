import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px 20px;
`;

export const Logo = styled.img``;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }
`;

export const ContainerCart = styled.div`
    text-align: right;
    margin-right: 10px;
`;

export const NameCart = styled.strong`
    display: block;
    color: #FFF;
`;

export const ItensCart = styled.span`
    font-size: 12px;
    color: #999;
`;
