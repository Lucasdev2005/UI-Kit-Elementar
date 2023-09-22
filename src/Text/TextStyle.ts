import styled from "styled-components";

interface TextStyleProps {
    bold?: boolean;
    fontSize?: "large" | "larger" | "medium" | "small" | "smaller",
    align?: "center" | "end" | "start"
}

export const TextStyle = styled.div<TextStyleProps>`
    width: 100%;
    font-weight: ${(props: TextStyleProps) => (props.bold ? "bold" : "normal")};
    ${(props: TextStyleProps) => {
        if (props.fontSize) {
            return `font-size: ${props.fontSize};`
        }
        return "";
    }}
    ${(props: TextStyleProps) => {
        if (props.align) {
            return `text-align: ${props.align};`
        }
        return "text-align: start;";
    }}
`;