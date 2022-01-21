import styled from "styled-components";

export const CartContainer = styled.header`
    width: 80%;
    min-height: 100px;
    background: #FAFAFA;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0px 1px 4px #CCCCCC;
    margin: 15px 20px;

    @media(max-width: 600px) {
        flex-direction: column;
    }

    &:hover {
        box-shadow: 0px 1px 4px rgb(8, 1, 42);
    }
`;

export const CartTitle = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    margin: 10px 0;
`

export const CartPrice = styled.p`
    font-size: 1.1em;
    color: rgb(8, 1, 42);
    font-weight: bold;
    border-bottom: solid 2px  rgb(8, 1, 42);
    margin-bottom: 5px;
`

export const CartButton = styled.button`
    font-size: 1;
    background: ${({disabled}) => disabled ? "#CCCCCC" : "rgb(8, 1, 42)"};
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
`

export const CartStock = styled.p`
    font-size: 0.8em;
    text-align: right;
`

export const CartQtd = styled.p`
    font-size: 0.8em;
    text-align: right;
`
