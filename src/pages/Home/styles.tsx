import styled from 'styled-components';

import { darken } from 'polished';

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;
`;

export const Product = styled.li`
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 5px;
    padding: 20px;
`;

export const ProductImage = styled.img`
    align-self: center;
    max-width: 250px;
`;

export const ProductDescription = styled.strong`
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
`;

export const ProductPrice = styled.span`
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
`;

export const Button = styled.button`
    background: #777;
    color: #FFF;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
        background: ${darken(0.03, '#777')}
    }
`;

export const ButtonImage = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);

    svg {
        margin-right: 5px;
    }
`;

export const ButtonDescription = styled.span`
    flex: 1;
`;
