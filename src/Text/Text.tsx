import React from "react";
import { TextStyle } from "./TextStyle";

export interface TextProps {
    text: string,
    bold?: boolean,
    fontSize?: "large" | "larger" | "medium" | "small" | "smaller",
    align?: "center" | "end" | "start"
}

export function Text({text, bold, fontSize}: TextProps) {
    return (
        <TextStyle bold={bold} fontSize={fontSize}>
            {text}
        </TextStyle>
    );
}