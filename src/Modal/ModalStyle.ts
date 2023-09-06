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
        position: absolute; /* Posicionamento absoluto dentro do modal */
        top: 50%; /* Centralize verticalmente */
        left: 50%; /* Centralize horizontalmente */
        transform: translate(-50%, -50%); /* Centralize completamente */
        background-color: #fff; /* Cor de fundo do modal */
        padding: 20px; /* Espaçamento interno */
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra para estilo */
    }

`;