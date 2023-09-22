import React from "react";
import { TextStyle } from "./TextStyle";

export interface TextProps {
    text: string,
    bold?: boolean,
    fontSize?: "large" | "larger" | "medium" | "small" | "smaller",
    align?: "center" | "end" | "start",
    classname?: string
}

export function Text({text, bold, fontSize, align, classname}: TextProps) {
    return (
        <TextStyle className={classname} bold={bold} fontSize={fontSize} align={align}>
            {text}
        </TextStyle>
    );
}