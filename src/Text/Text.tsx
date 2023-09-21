import React from "react";
import { TextStyle } from "./TextStyle";

export interface TextProps {
    text: string,
    bold?: boolean
}

export function Text({text, bold}: TextProps) {
    return (
        <TextStyle>
            {text}
        </TextStyle>
    );
}