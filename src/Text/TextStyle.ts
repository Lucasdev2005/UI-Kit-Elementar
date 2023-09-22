import styled from "styled-components";

interface TextStyleProps {
    bold?: boolean;
    fontSize?: "large" | "larger" | "medium" | "small" | "smaller"
}

export const TextStyle = styled.div<TextStyleProps>`
    width: 100%;
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
    ${(props) => {
        if (props.fontSize) {
            return `font-size: ${props.fontSize};`
        }
        return "";
    }}
`;