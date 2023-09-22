import styled from "styled-components";

export interface BoxStyleProps {
    display?: "flex" | "grid" | "block";
    justifyContent?: "center" | "space-around" | "space-between" | "space-evenly" | "start" | "end" | "left" | "right"| "";
    alignItems?: "center" | "baseline"
    w?: "100" | string;
    h?: "100" | string;
    backgroundColor?: "white" | string;
}

export const BoxStyle = styled.div<BoxStyleProps>`
    display: ${(props: BoxStyleProps) => props.display};
    justify-content: ${(props: BoxStyleProps) => props.justifyContent};
    align-items: ${(props: BoxStyleProps) => props.alignItems};
    width: ${(props: BoxStyleProps) => props.w};
    height: ${(props: BoxStyleProps) => props.h};
    background-color: ${(props: BoxStyleProps) => props.backgroundColor};
`;