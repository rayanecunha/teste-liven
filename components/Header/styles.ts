import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    background: rgb(8, 1, 42);
    display: flex; 
    align-items: center;
    justify-content: space-around;

    & > a {
        color: white;
        text-decoration: none;
        font-size: 22px;
        padding: 0 10px; 
        
        &:hover {
            border-bottom: 2px solid white;
        }
    }
`;