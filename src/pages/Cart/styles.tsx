import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 5px;
`;

export const ProductTable = styled.table`
    width: 100%;
`;
export const ProductTHead = styled.thead``;
export const ProductTLine = styled.tr``;
export const ProductTTitle = styled.th`
    color: #999;
    text-align: left;
    padding: 12px 12px 12px 0px;
`;

export const ProductBody = styled.tbody`
    padding: 12px;
    border-bottom: 1px solid #eee;
`;

export const ProductTR = styled.tr``;
export const ProductTD = styled.td``;
export const ProductImage = styled.img`
    height: 100px;
`;

export const ProductDescription = styled.strong`
    display: block;
    color: #333;
`;
export const ProductPrice = styled.span`
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
`;

export const ProductButtons = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductCount = styled.input`
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 6px;
    width: 50px;
`;

export const ProductButton = styled.button`
    background: none;
    border: 0;
    padding: 6px;
`;
export const ProductTotal = styled.strong``;
export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;
export const FooterButton = styled.button`
    background: #777;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
        background: ${darken(0.03, '#777')}
    }
`;
export const Total = styled.div`
    display: flex;
    align-items: baseline;
`;

export const TotalName = styled.span`
    color: #999;
    font-weight: bold;
`;

export const TotalPrice = styled.strong`
    font-size: 28px;
    margin-left: 10px;
`;
