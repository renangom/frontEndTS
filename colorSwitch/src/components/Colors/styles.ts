import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    right: 0;
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const Span = styled.span`
    width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 10px 5px;
        cursor: pointer;
        background: ${props => props.color};
        transition: 0.5s;
`;