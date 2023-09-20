import React from "react";
import { ButtonStyle } from "./ButtonStyle";

export interface ButtonProps {
    text: string;
    hexadecimal: string;    
    action: (...args: any[]) => any;
    circular?: boolean;
    disabled?: boolean,
    className?: string
}

export function Button({text, hexadecimal, action, circular, disabled, className}: ButtonProps) {
    return (
        <ButtonStyle className={className} circular={circular || false} color={ '#' + hexadecimal} onClick={() => {action()}} disabled={disabled}>
            {text}
        </ButtonStyle>
    );
}