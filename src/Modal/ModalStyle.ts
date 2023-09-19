import styled from "styled-components";

export const ModalStyle = styled.div`
    z-index: 9999;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 

    .modal-content {
        background-color: #fefefe;
        max-width: 80%;
        width: 80%;
    }

    button {
        background-color: transparent;
        cursor: pointer;
        outline: none;
        border: none;
        font-size: 20px;

        &:hover {
            transition: filter 0.3s;
            filter: brightness(1.7);
        }

        &:active {
            transform: scale(1.1);
            transition: transform 0.2s;
        }
    }

`;