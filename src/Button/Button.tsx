import React from "react";
import { ButtonStyle } from "./ButtonStyle";

export interface ButtonProps {
    text: string;
    hexadecimal: string;    
    action: (param?: any) => any;
    circular?: boolean;
    disabled?: boolean
}

export function Button({text, hexadecimal, action, circular, disabled}: ButtonProps) {
    return (
        <ButtonStyle circular={circular || false} color={ '#' + hexadecimal} onClick={action} disabled={disabled}>
            {text}
        </ButtonStyle>
    );
}