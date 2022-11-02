import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px;
    background: #fff;

    > h2 {
        font-weight: 300;
        border-left: 15px solid #1dd1a1;
        padding-left: 10px;
    }

    > div {
        display: flex;
        justify-content: space-between;

        > a:nth-child(2){
            font-weight: 500;
            text-decoration: underline;
        }
    }
`;

export const LoginButton = styled.button`
    border: none;
    background: ${props => props.color};
    color: #fff;
    transition: 0.5s;
    font-size: 1.1em;
    font-weight: 500;
    cursor: pointer;
    width: 100%;
    font-size: 1em;
    padding: 10px 15px;
    outline: none;
`;