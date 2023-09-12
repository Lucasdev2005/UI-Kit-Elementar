import styled from "styled-components";

export const ModalStyle = styled.div`
    top: 0;
    left: 0;
    padding: 5%;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: red;

    .modal-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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