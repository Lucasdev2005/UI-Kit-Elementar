import styled from "styled-components";

export const FormGroup = styled.div`
    position: relative;
    padding: 20px 0 0;
    width: 100%;
    min-width: 180px;

    .form__field {
        font-family: inherit;
        width: 100%;
        border: none;
        border-bottom: 2px solid ${props => props.color};
        outline: 0;
        font-size: 17px;
        color: ${props => props.color};
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown ~ .form__label {
            font-size: 17px;
            cursor: text;
            top: 20px;
        }

        &:focus {
            padding-bottom: 6px;
            font-weight: 700;
            border-width: 3px;
            border-image: var(${props => props.color});
            border-image-slice: 1;
        }
    }

    .form__field:focus ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 17px;
        color: var(--${props => props.color});
        font-weight: 700;
    }

    .form__field:required, .form__field:invalid {
        box-shadow: none;
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 17px;
        color: #9b9b9b;
        pointer-events: none;
    }
`;