import styled from "styled-components";

export const CardContainer = styled.header`
    width: 200px;
    min-height: 250px;
    background: #FAFAFA;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0px 1px 4px #CCCCCC;
    margin: 30px 40px;

    &:hover {
        box-shadow: 0px 1px 4px rgb(8, 1, 42);
    }
`;

export const CardTitle = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    margin: 10px 0;
`

export const CardPrice = styled.p`
    font-size: 1.1em;
    color: rgb(8, 1, 42);
    font-weight: bold;
    border-bottom: solid 2px  rgb(8, 1, 42);
    margin-bottom: 5px;
`

export const CardButton = styled.button`
    font-size: 1;
    width: 80%;
    background: ${({disabled}) => disabled ? "#CCCCCC" : "rgb(8, 1, 42)"};
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
`

export const CardStock = styled.p`
    font-size: 0.8em;
    text-align: right;
    width: 100%;
`
