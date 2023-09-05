import React from "react";
import { ButtonStyle } from "./ButtonStyle";

export interface ButtonProps {
    text: string;
    color: string;    
    action: (param?: any) => any;
    circular?: boolean;
    disabled?: boolean
}

export function Button({text, color, action, circular, disabled}: ButtonProps) {
    return (
        <ButtonStyle circular={circular || false} color={color} onClick={action} disabled={disabled}>
            {text}
        </ButtonStyle>
    );
}