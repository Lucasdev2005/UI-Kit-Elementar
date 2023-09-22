import React, { ReactNode } from "react";
import { BoxStyle } from "./BoxStyle";

export interface BoxProps {
    display?: "flex" | "grid" | "block";
    justifyContent?: "center" | "space-around" | "space-between" | "space-evenly" | "start" | "end" | "left" | "right";
    alignItems?: "center" | "baseline"
    w?: number;
    h?: number;
    backgroundColor?: "white" | string;
    children: ReactNode
}

export function Box({display, justifyContent, alignItems, w, h, backgroundColor, children}: BoxProps) {

    return (
        <BoxStyle 
            display={display}
            justifyContent={(justifyContent) ? justifyContent : ""} 
            alignItems={(alignItems) ? alignItems : "center"} 
            w={(w) ? w + '%' : '100%'} 
            h={(h) ? h + '%' : '100%'} 
            backgroundColor={(backgroundColor) ? backgroundColor : "white"}
        >
            {children}
        </BoxStyle>
    );
}