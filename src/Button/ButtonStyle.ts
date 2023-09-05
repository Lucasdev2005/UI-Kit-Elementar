import styled from "styled-components";

export const ButtonStyle = styled.button<{color: string, circular: boolean}>`
    background-color: ${(props: any) => props.color};
    color: white;
    width: 100%;
    cursor: pointer;
    border-radius: ${(props: any) => props.circular ? 40 : 5}px;
    border-style: none;
    box-sizing: border-box;
    height: 40px;
    text-align: center;
    text-decoration: none;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &:active {
        filter: saturate(0.5);
        transition: filter 0.2ms ease;
    }

    &:hover {
        transform: scale(1.1);
        transition: transform 0.2s;
    }
`;